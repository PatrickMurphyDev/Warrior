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
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%' }}>
      <div style={{ width: '34%' }}>
        <p>
          Warrior convenience stores strive to provide superior customer
          service, selection and value to the communities we serve and live in.
        </p>
      </div>
      <div
        style={{
          width: '65%',
          height: '100%',
          display: 'inline-block',
          overflow: 'hidden',
          position: 'absolute',
          minHeight: 50,
          top: 0,
          right: 0,
        }}
      >
        <Image
          src="/assets/images/gas3.jpg"
          alt="image of gas station fuel hose dispensing into car"
          style={{
            objectFit: 'cover',
            objectPosition: 'center -120px',
          }}
          className="rounded-md drop-shadow-md"
          fill
        />
      </div>
    </div>
  );
}

export function LocationsRow() {
  return (
    <div style={{ display: 'relative' }}>
      <div
        style={{ width: '80%', display: 'inline-block' }}
        className="float-right"
      >
        <LocationsOverview />
      </div>
      <div
        style={{
          width: '19%',
          display: 'inline-block',
          overflow: 'hidden',
          position: 'relative',
          minHeight: 390,
        }}
      >
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
      <h1
        style={{ borderBottom: `4px solid ${AppConfig.colors[1]}` }}
        className="mb-1"
      >
        Welcome to Warrior Quick Stop!
      </h1>
      <WelcomeRow />
      <br />
      <LocationsRow />
      <br />
      <h2
        style={{
          borderBottom: `4px solid ${AppConfig.colors[1]}`,
          textAlign: 'center',
          marginBottom: '.6em',
        }}
      >
        Why Visit Warrior&apos;s Quick Stop?
      </h2>
      <ImageCardRow />
      <div>
        <br />
        <br />
        <h2 style={{ borderBottom: `4px solid ${AppConfig.colors[1]}` }}>
          Services & Products
        </h2>
        <ul className="ml-8 list-disc">
          <li>Gasoline & Diesel</li>
          <li>Propane</li>
          <li>Vapes</li>
          <li>Ciggarettes</li>
          <li>Beer</li>
          <li>Car Wash</li>
          <li>Tire Service & Oil Change</li>
          <li>More...</li>
        </ul>
      </div>
    </div>
  );
}
