'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

const inMin: number = 0.0;
const inMax: number = 170.0;
const outMin: number = 120.0;
const outMax: number = 55.0;

const BaseTemplateHeaderController = function scaleVar(
  inValParam: number,
  inMinParam: number,
  inMaxParam: number,
  outMinParam: number,
  outMaxParam: number,
): number {
  if (inValParam >= inMaxParam) {
    return outMaxParam;
  }
  return (
    ((Math.round(inValParam) - inMinParam) * (outMaxParam - outMinParam)) /
      (inMaxParam - inMinParam) +
    outMinParam
  );
};

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
      className="inline-block w-full pl-4 align-middle font-bold md:w-2/5 xl:w-2/5"
      style={{
        color: AppConfig.colors[0],
        backgroundColor: AppConfig.colors[1],
        textShadow: '#444 1px 1px 2px',
        height: BaseTemplateHeaderController(
          window.scrollY,
          inMin,
          inMax,
          48,
          36,
        ),
        fontSize: BaseTemplateHeaderController(
          window.scrollY,
          inMin,
          inMax,
          30,
          28,
        ),
      }}
    >
      <span
        className="relative mr-2 mt-1 inline-block rounded-full align-top shadow-sm"
        style={{
          width: `${BaseTemplateHeaderController(
            window.scrollY,
            inMin,
            inMax,
            40,
            28,
          )}px`,
          height: `${BaseTemplateHeaderController(
            window.scrollY,
            inMin,
            inMax,
            40,
            28,
          )}px`,
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
              left: '-33%',
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
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.scrollY <= inMax) {
          setSmall(
            BaseTemplateHeaderController(
              window.scrollY,
              inMin,
              inMax,
              outMin,
              outMax,
            ),
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
        <Image
          sizes="(max-width:600px) 600px, (max-width:900px)900px, (max-width:1200px) 1200px, 1500px"
          alt="Warrior Gas Station Cle Elum"
          src="/assets/images/layout-header-trim-center.png"
          className="inline-block size-full"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          fill
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
