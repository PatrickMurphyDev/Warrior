/* eslint-disable @next/next/no-img-element */
import { type ReactNode } from 'react';

import BaseTemplateHeaderImage from '@/components/BaseTemplateHeaderImage';
import { AppConfig } from '@/utils/AppConfig';

export function BaseTemplateFooterTemplate() {
  return (
    <div>
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
    </div>
  );
}

const BaseTemplate = (props: {
  leftNav: ReactNode;
  rightNav?: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-lg">
        <header className="sticky top-0 z-50 border-b border-gray-800">
          <BaseTemplateHeaderImage />
          <div
            className="flex justify-between"
            style={{
              backgroundColor: '#eee',
            }}
          >
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
          <BaseTemplateFooterTemplate />
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
