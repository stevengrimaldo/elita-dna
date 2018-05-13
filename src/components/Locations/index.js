import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GoogleMapsLoader from 'google-maps'

import { BodyText, FeaturedText } from '../../global/type'

import { setWidth, shadeOf } from '../../global/utils'

import { color, spacing } from '../../global/theme'

const MapWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -200px;
  bottom: 0;
  height: calc(100% + 300px);
  width: 60%;
  z-index: 0;
  overflow: hidden;

  &.active {
    z-index: 1;
  }
`

const MapCode = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
`

const MapDetails = styled.div`
  background-color: transparent;
  padding: 15px 15px 12px;
  cursor: pointer;
  max-width: 520px;
  width: 100%;
  transition: all 250ms;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }
`

const LocationName = FeaturedText.extend`
  text-transform: uppercase;
  transition: all 250ms;
`

const Location = styled.div`
  &.active,
  &:hover {
    ${MapDetails} {
      background-color: ${shadeOf(color.emperor, 0.05)};
      border-radius: 4px;
    }

    ${LocationName} {
      color: ${color.persimmon};
    }
  }

  &:hover {
    ${MapWrapper} {
      z-index: 2;
    }
  }
`

const List = styled.div`
  padding-left: ${setWidth(spacing.horizontalPadding)};
  position: relative;
`

GoogleMapsLoader.KEY = 'AIzaSyCok5PyWTvryvbsRzaVAkJbpuZjfklnmJM'

class Locations extends Component {
  mapRefs = []

  state = {
    activeLocationIndex: 0,
  }

  componentDidMount() {
    this.loadMaps()
  }

  componentWillUnmount() {
    this.releaseMaps()
  }

  loadMaps() {
    GoogleMapsLoader.load(google => {
      this.mapRefs.map(map => this.geocodeAddress(google, map.address, map.el))
    })
  }

  releaseMaps = () => {
    GoogleMapsLoader.release()
  }

  geocodeAddress = (google, location, el) => {
    const geocoder = new google.maps.Geocoder()

    geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'OK') {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        const mapOptions = {
          // The latitude and longitude to center the map (always required)
          center: results[0].geometry.location,

          // Remove the default controls
          disableDefaultUI: true,

          // How you would like to style the map.
          // This is where you would paste any style found on Snazzy Maps.
          styles: [],

          // How zoomed in you want the map to start at (always required)
          zoom: 16,
        }

        // Create the Google Map using our element and options defined above
        const map = new google.maps.Map(el, mapOptions)

        // Let's also add a marker while we're at it
        // eslint-disable-next-line no-unused-vars
        const marker = new google.maps.Marker({
          map,
          position: results[0].geometry.location,
        })
      } else {
        alert('Geocode was not successful for the following reason: ' + status)
      }
    })
  }

  showMap = i => {
    this.setState({ activeLocationIndex: i })
  }

  render(props, state) {
    return (
      <List>
        {props.data.map((location, i) => {
          const active = state.activeLocationIndex === i

          return (
            <Location className={active && 'active'} key={i}>
              <MapDetails onClick={() => this.showMap(i)}>
                <LocationName>{location.name}</LocationName>
                <BodyText>{location.address}</BodyText>
              </MapDetails>
              <MapWrapper>
                <MapCode
                  className={active && 'active'}
                  dataAddress={location.address}
                  innerRef={el => {
                    if (this.mapRefs.every(i => i.el !== el) && el != null) {
                      this.mapRefs.push({ address: location.address, el })
                    }
                  }}
                />
              </MapWrapper>
            </Location>
          )
        })}
      </List>
    )
  }
}

Locations.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string,
      name: PropTypes.string,
    })
  ),
}

export default Locations
