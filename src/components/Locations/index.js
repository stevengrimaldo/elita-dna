import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'
import axios from 'axios'

import { Map } from '../'

import { BodyText, FeaturedText } from '../../global/type'

import { setWidth, shadeOf } from '../../global/utils'

import { color, spacing } from '../../global/theme'

import { googleMapsURL } from '../../global/data'

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

const LocationName = styled(FeaturedText)`
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
  state = {
    activeLocationIndex: 0,
    locations: [],
  }

  componentDidMount() {
    this.props.data.map((location, i) => {
      axios({
        data: { address: location.address },
        headers: { 'content-type': 'application/json' },
        method: 'POST',
        url: 'https://us-central1-elite-dna-therapy.cloudfunctions.net/geocode',
      })
        .then(res => {
          this.setState(state => ({
            locations: [...state.locations, res.data],
          }))
        })
        .catch(err => {
          console.log(err)
        })
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
          let latLng = null
          if (state.locations.length > 0) {
            if (state.locations[i] != null) {
              if (state.locations[i].latLng != null) {
                latLng = state.locations[i].latLng
              }
            }
          }

          return (
            <Location className={active && 'active'} key={i}>
              <MapDetails onClick={() => this.showMap(i)}>
                <LocationName>{location.name}</LocationName>
                <BodyText>{location.address}</BodyText>
              </MapDetails>
              <MapWrapper>
                <MapCode className={active && 'active'}>
                  {state.locations.length > 0 ? (
                    <Map
                      mapPosition={latLng}
                      googleMapURL={googleMapsURL}
                      loadingElement={<div style={{ height: '100%' }} />}
                      containerElement={<div style={{ height: '100%' }} />}
                      mapElement={<div style={{ height: '100%' }} />}
                    />
                  ) : (
                    <p>loading...</p>
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
