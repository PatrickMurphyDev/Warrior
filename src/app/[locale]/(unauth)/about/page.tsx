import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function About() {
  const t = useTranslations('About');

  return (
    <div>
      <h1>About Warrior Quick Stop</h1>
      <p>{t('about_paragraph')}</p>

      <h2>Contact Information</h2>
      <div>
        <p>
          <span>Icon</span> Phone:{' '}
        </p>
        <p>Address: </p>
        <p>Email: </p>
      </div>

      <h3>Managment & Ownership</h3>
      <div>
        <h4>Victor Singh (phone/email)</h4>
        <h4>Harsh Singh (phone/email)</h4>
        <h4>Gary Singh (phone/email)</h4>
      </div>
    </div>
  );
}
