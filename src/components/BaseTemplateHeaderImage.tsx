'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

export function BaseTemplateHeaderSubTitle() {
  const t = useTranslations('BaseTemplate');

  return (
    <h2 className="relative float-right hidden align-middle text-base md:inline-block md:w-3/5 xl:inline-block xl:w-3/5">
      <span
        className="h-full"
        style={{
          position: 'absolute',
          right: 10,
        }}
      >
        {t('description')}
      </span>
    </h2>
  );
}

export function BaseTemplateHeaderMainTitle() {
  return (
    <h1
      className="inline-block h-12 w-full pl-4 align-middle text-xl font-bold md:w-2/5 md:text-2xl xl:w-2/5 xl:text-3xl"
      style={{
        color: AppConfig.colors[0],
        backgroundColor: AppConfig.colors[1],
        textShadow: '#444 1px 1px 2px',
      }}
    >
      <span
        className="relative mr-2 inline-block rounded-full align-bottom shadow-sm"
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: AppConfig.colors[0],
        }}
      >
        <span className="relative mx-2 inline-block size-full">
          <Image
            src="/assets/images/logo_125.png"
            alt="warrior logo"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
              left: '-12px',
            }}
            unoptimized
            fill
          />
        </span>
      </span>
      <span>{AppConfig.name}</span>
    </h1>
  );
}

export default function BaseTemplateHeaderImage() {
  const [small, setSmall] = useState(100);
  const inMin = 0.0;
  const outMax = 55.0;
  const outMin = 120.0;
  const inMax = 170.0;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.scrollY <= inMax) {
          setSmall(
            window.scrollY >= inMax
              ? outMax
              : ((Math.round(window.scrollY) - inMin) * (outMax - outMin)) /
                  (inMax - inMin) +
                  outMin,
          );
        }
      });
    }
  });

  return (
    <div>
      <div
        className="relative w-full"
        style={{
          overflow: 'hidden',
          backgroundColor: '#232323',
          height: small,
        }}
      >
        <img
          alt="Warrior Gas Station Cle Elum"
          src="/assets/images/layout-header-trim-center.png"
          className="inline-block size-full"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: AppConfig.colors[1],
          color: AppConfig.colors[0],
        }}
      >
        <BaseTemplateHeaderMainTitle />
        <BaseTemplateHeaderSubTitle />
      </div>
    </div>
  );
}
