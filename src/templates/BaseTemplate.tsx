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
            className="relative h-20  w-full md:h-28 xl:h-28"
            style={{ overflow: 'hidden', backgroundColor: '#232323' }}
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
              color: AppConfig.colors[0],
              backgroundColor: AppConfig.colors[1],
              position: 'relative',
            }}
          >
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
          </div>

          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav className="hidden md:inline-block xl:inline-block">
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
