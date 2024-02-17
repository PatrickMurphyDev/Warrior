/* eslint-disable no-plusplus */
/* eslint-disable no-unsafe-optional-chaining */
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { AppConfig } from '@/utils/AppConfig';

type ILocationDetailPropsSlug = {
  params: { slug: string; locale: string };
  photoID?: number;
};

export function generateStaticParams() {
  return Array.from(AppConfig.locationArray).map((elt) => ({
    slug: `${elt}`,
  }));
}

export async function generateMetadata(props: ILocationDetailPropsSlug) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'LocationSlug',
  });

  return {
    title: t('meta_title', { slug: props.params.slug }),
    description: t('meta_description', { slug: props.params.slug }),
  };
}

export function LocationDetailPhotosPanel(props: ILocationDetailPropsSlug) {
  const data =
    AppConfig.locationDetailsArray[
      AppConfig.locationArray.indexOf(props.params.slug)
    ];
  let photoIndexVar = 0;
  if (props.photoID) {
    photoIndexVar = props.photoID;
  }
  const imgUrl = `/assets/images/${data?.imageList[photoIndexVar]}`;

  return (
    <div className="relative m-1 rounded border border-solid border-gray-300 p-1 shadow-md">
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'inline-block',
          overflow: 'hidden',
          position: 'relative',
          minHeight: 150,
          top: 0,
        }}
      >
        <Image
          src={imgUrl}
          alt="Photo of our store, Warrior's Quick Stop"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
          fill
        />
      </div>
      <h4
        style={{ borderBottom: `2px solid ${AppConfig.colors[1]}` }}
        className="mb-1 pl-1"
      >
        {data?.imageList[photoIndexVar]}
      </h4>
    </div>
  );
}

const LocationDetailPhotosPage = (props: ILocationDetailPropsSlug) => {
  const t = useTranslations('LocationSlug');
  const data =
    AppConfig.locationDetailsArray[
      AppConfig.locationArray.indexOf(props.params.slug)
    ];

  let photoMapId = 0;
  return (
    <div>
      <span className="text-sm">
        <a href="/">Home</a> <span className="text-xs">&gt;</span>{' '}
        <a href="/location">Locations</a> <span className="text-xs">&gt;</span>{' '}
        <a href={`/location/${data.name}`}>{data.name}</a>{' '}
        <span className="text-xs">&gt;</span> Photos
      </span>
      <h1
        style={{ borderBottom: `4px solid ${AppConfig.colors[1]}` }}
        className="mb-1 capitalize"
      >
        {`${t('header', { slug: data?.name })} Photos`}
      </h1>
      <div className="relative w-full">
        {data?.imageList.map((elt) => (
          <div className="inline-block w-3/12 align-top" key={elt}>
            <LocationDetailPhotosPanel
              params={props.params}
              photoID={photoMapId++}
            />
          </div>
        ))}
      </div>
      <br className="clear-both" />
      <a href="." className="rounded border border-solid border-black p-2">
        &lt; Back to {data.name} Location Details
      </a>
    </div>
  );
};
// <p>{t('content')}</p>
export const dynamicParams = false;

export default LocationDetailPhotosPage;
