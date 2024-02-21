import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { ImageTitleCard } from '@/components/ImageTitleCard';
import { LocationsOverview } from '@/components/LocationsOverview';
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

/**
        <ResponsiveImage
          src="/assets/images/gas3.jpg"
          dimensionsVect={['65%', '100%']}
          imgOffset={['-80', '0']}
          altText="Image 3"
        /> */

/* <div>
        <div style={{ width: '80%', display: 'inline-block' }}>
          <LocationsOverview />
        </div>
        <div
          className="float-right"
          style={{ width: '19%', display: 'inline-block' }}
        >
          <h4>Testimonials</h4>
          <ul>
            <li>"Review" - Person</li>
          </ul>
        </div>
      </div> */

export function WelcomeRow() {
  return (
    <div className="relative w-full overflow-hidden">
      <div>
        <div className="relative inline-block h-16 w-full overflow-hidden md:absolute md:right-0 md:top-0 md:h-40 md:w-2/3">
          <Image
            src="/assets/images/gas3.jpg"
            alt="image of gas station fuel hose dispensing into car"
            style={{
              objectPosition: 'center -120px',
            }}
            className="rounded-md object-cover drop-shadow-md"
            fill
          />
        </div>
        <div className="text-xs md:w-1/3 md:text-lg">
          <p className="md:py- !my-0 !py-0 md:my-3">
            Warrior convenience stores strive to provide superior customer
            service, selection and value to the communities we serve and live
            in.
          </p>
        </div>
      </div>
    </div>
  );
}

export function LocationsRow() {
  return (
    <div className="relative">
      <div className="float-right inline-block w-full md:w-4/5 xl:w-4/5">
        <LocationsOverview />
      </div>
      <div className="relative hidden w-1/5 overflow-hidden md:inline-block">
        <Image
          src="/assets/images/gas2.jpg"
          alt="Close Up of Gas Pumps"
          style={{
            objectFit: 'cover',
            objectPosition: 'center -50px',
          }}
          className="rounded-md drop-shadow-md"
          fill
        />
      </div>
    </div>
  );
}

export function ImageCardRow() {
  return (
    <div>
      <ImageTitleCard
        src="/assets/images/chicken-tender.jpg"
        title="Fresh Hot Food"
      />
      <ImageTitleCard
        src="/assets/images/vape.jpg"
        title="Extensive Vape Selection"
      />
      <ImageTitleCard
        src="/assets/images/community.jpg"
        title="Low Prices Always"
      />
      <br className="clear-both" />
    </div>
  );
}

export default function Index() {
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
            <li>Gasoline & Diesel</li>
            <li>Propane</li>
            <li>Vapes</li>
            <li>Cigarettes</li>
            <li>Beer</li>
            <li>Car Wash</li>
            <li>Tire Service & Oil Change</li>
            <li>More...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
