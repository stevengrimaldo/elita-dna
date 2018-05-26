import { h } from 'preact'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const Map = withScriptjs(
  withGoogleMap(props => {
    let response
    if (props.mapPosition) {
      response = (
        <GoogleMap defaultZoom={16} defaultCenter={props.mapPosition}>
          <Marker position={props.mapPosition} />
        </GoogleMap>
      )
    } else {
      response = <p>loading...</p>
    }
    return response
  })
)

export default Map
