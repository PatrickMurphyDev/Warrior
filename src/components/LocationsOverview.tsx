import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';

import { LocationDetails } from './LocationDetails';

// color: AppConfig.colors[0], // make h1 yellow
// style={{ backgroundColor: '#f0eee8' }}
const LocationsOverview = () => (
  <div className="flex w-full flex-row-reverse justify-end gap-3">
    <ol className="grid w-5/12 gap-3">
      {Array.from(AppConfig.locationArray).map((elt) => (
        <LocationDetails key={elt} id={elt} />
      ))}
    </ol>
    <div
      className="relative inline-block grow flex-col"
      style={{ backgroundColor: '#f0eee8' }}
    >
      <Image
        alt="Warrior Quick Stop Location Map"
        src="/assets/images/map_cleelum_ellensburg.svg"
        fill
        className="inline-block justify-end overflow-hidden border border-gray-900"
      />
    </div>
  </div>
);

export { LocationsOverview };
