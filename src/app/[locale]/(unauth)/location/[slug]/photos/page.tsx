/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable no-unsafe-optional-chaining */
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import LocationDetailPhotosPanel from '@/components/LocationDetailPhotosPanel';
import { AppConfig } from '@/utils/AppConfig';

export type ILocationDetailPropsSlug = {
  params: { slug: string; locale: string; photoID?: number };
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

export default function LocationDetailPhotosPage(
  props: ILocationDetailPropsSlug,
) {
  const t = useTranslations('LocationSlug');
  const data =
    AppConfig.locationDetailsArray[
      AppConfig.locationArray.indexOf(props.params.slug)
    ] || AppConfig.defaultLocationDetails;

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
        {data?.imageList.map(function mapDisplayPhotosPanels(elt) {
          const tempParams = props.params;
          tempParams.photoID = photoMapId++;
          return (
            <div className="inline-block w-3/12 align-top" key={elt}>
              <LocationDetailPhotosPanel params={tempParams} />
            </div>
          );
        })}
      </div>
      <br className="clear-both" />
      <a
        href="."
        className="rounded border border-solid border-black p-2 text-sm"
      >
        &lt; Back to {data.name} Location Details
      </a>
    </div>
  );
}
