import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Map } from '../'

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

class Locations extends Component {
  locations = []
  mapRefs = []

  state = {
    activeLocationIndex: 0,
    locations: null,
  }

  componentDidMount() {
    const googleMapsClient = require('@google/maps').createClient({
      Promise: Promise,
      key: 'AIzaSyCok5PyWTvryvbsRzaVAkJbpuZjfklnmJM',
    })

    if (this.mapRefs) {
      this.mapRefs.map((map, i) => {
        googleMapsClient
          .geocode({ address: map.address })
          .asPromise()
          .then(response => {
            this.locations.push({
              latLng: response.json.results[0].geometry.location,
            })
            this.setState({
              locations: this.locations,
            })
          })
          .catch(err => {
            console.log(
              `Geocode was not successful for the following reason: ${err}`
            )
          })
      })
    }
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
                  innerRef={el => {
                    if (this.mapRefs.every(i => i.el !== el) && el != null) {
                      this.mapRefs.push({ address: location.address, el })
                    }
                  }}>
                  {state.locations && (
                    <Map
                      mapPosition={state.locations[i].latLng}
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCok5PyWTvryvbsRzaVAkJbpuZjfklnmJM"
                      loadingElement={<div style={{ height: '100%' }} />}
                      containerElement={<div style={{ height: '100%' }} />}
                      mapElement={<div style={{ height: '100%' }} />}
                    />
                  )}
                </MapCode>
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
