/* eslint-disable no-plusplus */
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { ImageTitleCard } from '@/components/ImageTitleCard';
import { LocationsOverview } from '@/components/LocationsOverview';
import type { ILocationDetails } from '@/utils/AppConfig';
import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const WelcomeRow = function WelcomeRow() {
  return (
    <div className="relative w-full overflow-hidden">
      <div>
        <div className="relative inline-block h-16 w-full overflow-hidden md:absolute md:right-0 md:top-0 md:h-40 md:w-2/3">
          <Image
            src="/assets/images/gas3.jpg"
            alt="image of gas station fuel hose dispensing into car"
            style={{
              objectPosition: 'center 55%',
            }}
            className="rounded-md object-cover drop-shadow-md"
            fill
          />
        </div>
        <div className="text-xs md:w-1/3 md:text-lg">
          <p className="!my-0 !py-0 md:my-3 md:py-1">
            Warrior convenience stores strive to provide superior customer
            service, selection and value to the communities we serve and live
            in.
          </p>
        </div>
      </div>
    </div>
  );
};

const LocationsRow = function LocationsRow() {
  return (
    <div className="relative">
      <div className="float-right inline-block w-full md:w-4/5 xl:w-4/5">
        <LocationsOverview />
      </div>
      <div className="relative hidden h-80 w-1/5 overflow-hidden align-bottom md:inline-block">
        <Image
          src="/assets/images/gas2.jpg"
          alt="Close Up of Gas Pumps"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          className="rounded-md pr-3 drop-shadow-md"
          fill
        />
      </div>
    </div>
  );
};

const ImageCardRow = function ImageCardRow() {
  return (
    <div>
      <ImageTitleCard
        src="/assets/images/chicken-tender.png"
        title="Fresh Hot Food"
      />
      <ImageTitleCard
        src="/assets/images/vape.png"
        title="Extensive Vape Selection"
      />
      <ImageTitleCard
        src="/assets/images/community.jpg"
        title="Low Prices Always"
      />
      <br className="clear-both" />
    </div>
  );
};

export default function Index() {
  const servicesArray = [];
  const locations =
    AppConfig.locationDetailsArray ||
    Array<ILocationDetails | undefined>(AppConfig.defaultLocationDetails);
  for (let i = 0; i < locations.length; i++) {
    if (locations && locations[i]) {
      if (Object.prototype.hasOwnProperty.call(locations[i], 'services'))
        for (let j = 0; j < Array(locations[i]?.services).length; j++) {
          servicesArray.push(locations[i]?.services[j]);
        }
    }
  }
  return (
    <div>
      <div>
        <h1
          style={{ borderBottom: `4px solid ${AppConfig.colors[1]}` }}
          className="mb-1"
        >
          Welcome to Warrior Quick Stop!
        </h1>
      </div>
      <div>
        <WelcomeRow />
      </div>
      <br className="clear-both" />
      <div>
        <LocationsRow />
      </div>
      <br className="clear-both" />
      <div>
        <div className="relative rounded border border-solid border-gray-300 p-4 shadow-md">
          <h2
            className="mb-2 text-center"
            style={{
              borderBottom: `4px solid ${AppConfig.colors[1]}`,
            }}
          >
            Why Visit Warrior&apos;s Quick Stop?
          </h2>
          <ImageCardRow />
        </div>
      </div>
      <div>
        <br />
        <div className="relative rounded border border-solid border-gray-300 p-4 shadow-md">
          <h2 style={{ borderBottom: `4px solid ${AppConfig.colors[1]}` }}>
            Services & Products
          </h2>
          <ul className="ml-8 list-disc">
            {Array.from(servicesArray).map((elt) => {
              return <li key={elt}>{elt}</li>;
            })}
            <li>More...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
