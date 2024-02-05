import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const MapComponent = ({ getCoordinates }) => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleMapClick = ({ lat, lng }) => {
        setSelectedLocation({ lat, lng });
        getCoordinates({ latitude: lat, longitude: lng })
    };

    return (
        <div style={{ height: '50vh', width: '70%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey || "" }}
                defaultCenter={{ lat: 23.1686, lng: 79.9339 }}
                defaultZoom={13}
                onClick={handleMapClick}
            >
                {selectedLocation && (
                    <Marker lat={selectedLocation.lat} lng={selectedLocation.lng} />
                )}
            </GoogleMapReact>
        </div>
    );
};

const Marker = () => <div className="marker">📍</div>; // Marker component

export default MapComponent;