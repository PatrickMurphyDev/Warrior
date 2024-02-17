import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';

import { LocationDetails } from './LocationDetails';

// color: AppConfig.colors[0], // make h1 yellow
const LocationsOverview = () => (
  <div>
    <div>
      <h1
        style={{
          borderColor: AppConfig.colors[1],
          borderBottomWidth: 3,
          paddingLeft: 10,
          marginBottom: 7,
        }}
      >
        Warrior Locations
      </h1>
      <div style={{ backgroundColor: '#f0eee8' }}>
        <Image
          alt="Warrior Quick Stop Location Map"
          src="/assets/images/map_cleelum_ellensburg.svg"
          width={100}
          height={300}
          style={{
            width: '60%',
            height: '300px',
            borderWidth: 1,
            borderColor: '#222',
            display: 'block',
            float: 'left',
            backgroundColor: '#f0eee8',
          }}
        />
        <div
          style={{
            width: '39%',
            height: '300px',
            display: 'block',
            float: 'left',
          }}
        >
          <ol>
            {Array.from(AppConfig.locationArray).map((elt) => (
              <LocationDetails key={elt} id={elt} />
            ))}
          </ol>
        </div>
      </div>
    </div>
    <br className="clear-both" />
  </div>
);

export { LocationsOverview };
