import React from 'react';
import GoogleMapReact from 'google-map-react';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const MapView = ({ selectedLocation }) => {

    return (
        <div style={{ height: '50vh', width: '70%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey || "" }}
                defaultCenter={{ lat: +selectedLocation.lat, lng: +selectedLocation.lng }}
                defaultZoom={13}
            >
                {selectedLocation && (
                    <Marker lat={selectedLocation.lat} lng={selectedLocation.lng} />
                )}
            </GoogleMapReact>
        </div>
    );
};

const Marker = () => <div className="marker">📍</div>; // Marker component

export default MapView;