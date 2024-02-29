/* eslint-disable no-plusplus */
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { AppConfig } from '@/utils/AppConfig';

export interface IAboutPagePropsObjLocale {
  locale: string;
}
export interface IAboutPageProps {
  params: IAboutPagePropsObjLocale;
}

export interface IPageMetadata {
  title: string;
  description: string;
}

export async function generateMetadata(
  props: IAboutPageProps,
): Promise<IPageMetadata> {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  } as IPageMetadata;
}

function AboutPageDescriptionPanelContents() {
  const t = useTranslations('About');
  return (
    <div>
      <h1
        className="border-b-4 border-solid pl-2"
        style={{ borderColor: AppConfig.colors[1] }}
      >
        About Warrior Quick Stop
      </h1>
      <p className="p-2 text-sm" style={{ marginBottom: 1, marginTop: 1 }}>
        {t('about_paragraph')}
      </p>
    </div>
  );
}

function AboutPageContactPanelContents() {
  return (
    <div>
      <h2
        className="border-b-2 border-solid pl-2"
        style={{ borderColor: AppConfig.colors[1] }}
      >
        Contact Information
      </h2>
      <div className="pl-3 text-xs">
        <p style={{ marginTop: 2, marginBottom: 0 }}>
          <span className="text-lg">☎️</span> Phone:
          {` ${AppConfig.aboutPageDetails.phoneNumber}`}
        </p>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          <span className="text-lg">📍</span> Address:
          {` ${AppConfig.aboutPageDetails.address.line1}, ${AppConfig.aboutPageDetails.address.city}, ${AppConfig.aboutPageDetails.address.state} ${AppConfig.aboutPageDetails.address.zipcode}`}
        </p>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          <span className="text-lg">📧</span> Email:
          {` ${AppConfig.aboutPageDetails.email}`}
        </p>
      </div>
    </div>
  );
}

const AboutPageOwnershipPanelContents =
  function AboutPageOwnershipPanelContents() {
    let eltCount = 0;
    return (
      <div>
        <h3
          className="border-b-2 border-solid pl-2"
          style={{ borderColor: AppConfig.colors[1] }}
        >
          Managment & Ownership
        </h3>
        <div className="text-sm">
          <ul className="pl-3" style={{ marginTop: 5, marginBottom: 3 }}>
            {Array.from(AppConfig.aboutPageDetails.staff).map((elt) => {
              return <li key={eltCount++}>{elt}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  };

export default function About() {
  return (
    <div>
      <div
        className="relative w-full overflow-hidden rounded-md shadow-sm"
        style={{ height: 140 }}
      >
        <Image
          src={AppConfig.aboutPageDetails.imageSrcURL}
          alt="bmw outside"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center 63%',
          }}
        />
      </div>
      <div className="w-full">
        <div className="relative m-2 rounded border border-solid border-gray-300 p-1 shadow-md">
          <AboutPageDescriptionPanelContents />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-2">
        <div className="relative inline-block align-top">
          <div className="relative m-2 rounded border border-solid border-gray-300 p-1 shadow-md">
            <AboutPageContactPanelContents />
          </div>
        </div>
        <div className="inline-block align-top">
          <div className="relative m-2 rounded border border-solid border-gray-300 p-1 shadow-md">
            <AboutPageOwnershipPanelContents />
          </div>
        </div>
      </div>
    </div>
  );
}
