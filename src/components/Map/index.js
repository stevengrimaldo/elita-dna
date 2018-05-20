import { h } from 'preact'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={16} defaultCenter={props.mapPosition}>
      <Marker position={props.mapPosition} />
    </GoogleMap>
  ))
)

export default Map
