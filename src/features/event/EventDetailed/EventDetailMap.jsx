import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <Icon name='marker' size='big' color='red' />;
function EventDetailMap({ lat, lng }) {
  const center = { lat, lng };
  const zoom = 14;

  return (
    <Segment attached='bottom' style={{ padding: 0 }}>
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyDn6mwVKAIRNfNOQwZ24k-OimkRzDTC_Iw'
          }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
}

export default EventDetailMap;
