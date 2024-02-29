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
// md:absolute md:right-0 md:top-0 md:h-40 md:w-2/3
const WelcomeRow = function WelcomeRow() {
  return (
    <div className="relative flex overflow-hidden">
      <div className="flex flex-row justify-center gap-4">
        <div className="md:text-lg">
          <p className="!my-0 !py-0 md:my-3 md:py-1">
            Warrior convenience stores strive to provide superior customer
            service, selection and value to the communities we serve and live
            in.
          </p>
        </div>
        <div className="relative inline-block size-full grow overflow-hidden">
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
      </div>
    </div>
  );
};

const LocationsRow = function LocationsRow() {
  return (
    <div className="mt-6">
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
      <div className="relative grid flex-row-reverse gap-2">
        <div className="flex grow">
          <LocationsOverview />
        </div>
        <div className="relative hidden w-min grow overflow-hidden align-bottom md:inline-block">
          <Image
            src="/assets/images/gas2.jpg"
            alt="Close Up of Gas Pumps"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            className="rounded-md drop-shadow-md"
            fill
          />
        </div>
      </div>
    </div>
  );
};

const ImageCardRow = function ImageCardRow() {
  return (
    <div className="flex flex-row content-stretch justify-center gap-4">
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
    <div className="flex flex-col">
      <div className="flex">
        <h1
          style={{ borderBottom: `4px solid ${AppConfig.colors[1]}` }}
          className="mb-1 grow"
        >
          Welcome to Warrior Quick Stop!
        </h1>
      </div>
      <div className="flex-row">
        <WelcomeRow />
      </div>
      <div className="flex-row">
        <LocationsRow />
      </div>
      <div className="flex-row">
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
      <div className="flex-row">
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
