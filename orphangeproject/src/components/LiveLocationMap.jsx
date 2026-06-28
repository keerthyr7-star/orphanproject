import React, {useState} from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'


const LiveLocationMap = () => {

const [ position, setPosition ] = useState([13.0827, 80.2707])

  return (
    <div>
        <MapContainer
        center={position}
        zoom={16}
        style={{
            height: '500px',
            width: '100%'
        }}
        >

        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        </MapContainer>
    </div>
  )
}

export default LiveLocationMap
