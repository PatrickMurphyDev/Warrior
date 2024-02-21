import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';

import { LocationDetails } from './LocationDetails';

const CustomerTestimonials = () => (
  <div>
    <div>
      <h1
        style={{
          backgroundColor: AppConfig.colors[1],
          color: AppConfig.colors[0],
          paddingLeft: '10px',
        }}
      >
        Warrior Locations
      </h1>
      <div>
        <Image
          alt="Warrior Quick Stop Location Map"
          src="/assets/images/location-map.png"
          width={100}
          height={300}
          style={{
            width: '60%',
            height: '300px',
            borderWidth: 1,
            borderColor: '#222',
            display: 'block',
            float: 'left',
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
    <br />
    <br />
  </div>
);

export { CustomerTestimonials };
