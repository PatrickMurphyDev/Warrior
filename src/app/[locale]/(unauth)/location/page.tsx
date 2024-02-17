import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { LocationDetailsLargeCard } from '@/components/LocationDetails';
import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'location',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}
/* <Image
        src="/assets/images/map_cleelum_ellensburg.svg"
        width="800"
        height="200"
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
        alt="mainMap"
      /> */
const Location = () => {
  const t = useTranslations('location');

  return (
    <>
      <p>{t('presentation')}</p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Array.from(AppConfig.locationArray).map((elt) => (
          <LocationDetailsLargeCard id={elt} key={elt} />
        ))}
      </div>
    </>
  );
};

export default Location;
