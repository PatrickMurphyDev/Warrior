'use client';

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { AppConfig } from '@/utils/AppConfig';

import { LocationDetails } from './LocationDetails';

// color: AppConfig.colors[0], // make h1 yellow
// style={{ backgroundColor: '#f0eee8' }}
// https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=2c6f8e7048ab4173a814df3a22eab58f
const LocationsOverview = function () {
  const DefaultIcon = L.icon({
    iconUrl: 'assets/images/marker-icon.png',
    shadowUrl: 'assets/images/marker-shadow.png',
    iconAnchor: L.point(12, 41),
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  return (
    <div className="flex w-full flex-row justify-end gap-3">
      <ol className="grid w-5/12 gap-3">
        {Array.from(AppConfig.locationArray).map((elt) => (
          <LocationDetails key={elt} id={elt} />
        ))}
      </ol>
      <div className="inline-block w-7/12 grow flex-col">
        <MapContainer
          center={[47.103379455799214, -120.75164336554808]}
          zoom={10}
          className="size-full border border-gray-900"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[47.19615091214895, -120.95611612133357]}>
            <Popup>
              <h1>Warrior Cle Elum West</h1>
            </Popup>
          </Marker>
          <Marker position={[47.192146038323344, -120.91953969410451]}>
            <Popup>
              <h1>Warrior Cle Elum East</h1>
            </Popup>
          </Marker>
          <Marker position={[46.99102372964726, -120.54795270625756]}>
            <Popup>
              <h1>Warrior Ellensburg</h1>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export { LocationsOverview };
