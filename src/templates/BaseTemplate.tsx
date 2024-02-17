/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { type ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: ReactNode;
  rightNav?: ReactNode;
  children: ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-lg">
        <header className="border-b border-gray-300">
          <div
            className="relative h-28 w-full"
            style={{ overflow: 'hidden', backgroundColor: '#232323' }}
          >
            <img
              alt="Warrior Gas Station Cle Elum"
              src="/assets/images/layout-header.png"
              style={{
                display: 'block',
                position: 'absolute',
                top: -243,
                left: 0,
              }}
            />
          </div>
          <div
            style={{
              color: AppConfig.colors[0],
              backgroundColor: AppConfig.colors[1],
            }}
          >
            <h1
              className="pl-4 text-3xl font-bold"
              style={{
                color: AppConfig.colors[0],
                backgroundColor: AppConfig.colors[1],
                display: 'inline-block',
                width: '39%',
                textShadow: '#444 1px 1px 2px',
                height: '1.7em',
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
                <span
                  className="relative inline-block"
                  style={{ width: '40px', height: '35px' }}
                >
                  <Image
                    src="/assets/images/logo_125.png"
                    alt="warrior logo"
                    style={{
                      objectFit: 'cover',
                      objectPosition: '-1px 1px',
                    }}
                    unoptimized
                    fill
                  />
                </span>
              </span>
              {AppConfig.name}
            </h1>
            <h2
              className="float-right align-middle text-base"
              style={{
                width: '60%',
                display: 'inline-block',
                height: '1.7em',
                lineHeight: '1.7em',
              }}
            >
              <span
                style={{
                  paddingRight: 10,
                  float: 'right',
                }}
              >
                {t('description')}
              </span>
            </h2>
          </div>

          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          <div>
            <a href="/">Homepage</a>
            <span> | </span>
            <a href="/#todoEmployment">Employment Opportunities</a>
            <span> | </span>
            <a href="/sign-in">User Login</a>
          </div>
          <div>
            © Copyright {new Date().getFullYear()} {AppConfig.name}.
            <br />
            901 W 1st St, Cle Elum, WA 98922
          </div>
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
