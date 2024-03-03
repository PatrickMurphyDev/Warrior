/* eslint-disable react/no-unused-prop-types */
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import type { ILocationDetails } from '@/utils/AppConfig';
import { AppConfig } from '@/utils/AppConfig';

export type ILocationDetailPropList = {
  id: string;
};

function getDataObject(props: ILocationDetailPropList): ILocationDetails {
  const { defaultLocationDetails } = AppConfig;
  const data: ILocationDetails =
    AppConfig.locationDetailsArray[AppConfig.locationArray.indexOf(props.id)] ||
    defaultLocationDetails;
  return data;
}

export function LocationDetailsAddress(props: ILocationDetailPropList) {
  const data: ILocationDetails = getDataObject(props);
  let iconColor = 'red';
  if (data.key === 'Ellensburg') {
    iconColor = 'blue';
  } else if (data.key === 'Cle-Elum-East') {
    iconColor = 'green';
  }
  return (
    <div className="ml-2 text-sm">
      <Image
        src={`/assets/images/location_icon_${iconColor}.svg`}
        alt="LocationIcon"
        style={{ display: 'inline-block', marginBottom: 'px' }}
        width={15}
        height={15}
      />
      <span className="ml-1">
        {`${data.address.line1} ${data.address.line2} ${data.address.city}, ${data.address.state}`}
      </span>
    </div>
  );
}

export function OpenStatusLabel(props: ILocationDetailPropList) {
  const LocationDetailsDataObj: ILocationDetails = getDataObject(props);
  const openStatusLabelCSSClasses = [
    'mr-3',
    'mt-3',
    'rounded-md',
    'p-1',
    'text-sm',
  ];
  if (LocationDetailsDataObj.isOpen) {
    openStatusLabelCSSClasses.push('bg-green-200');
    openStatusLabelCSSClasses.push('text-green-600');
  } else {
    openStatusLabelCSSClasses.push('bg-red-200');
    openStatusLabelCSSClasses.push('text-red-600');
  }

  return (
    <span className={openStatusLabelCSSClasses.join(' ')}>
      {LocationDetailsDataObj.isOpen ? 'Open' : 'Closed'}
    </span>
  );
}

export function LocationDetailsLargeCard(props: ILocationDetailPropList) {
  const LocationDetailsDataObj: ILocationDetails = getDataObject(props);
  const t = useTranslations('location');
  return (
    <Link className="border-none" key={props.id} href={`/location/${props.id}`}>
      <div className="overflow-hidden rounded-lg border border-gray-500">
        <div className="relative h-28 w-full">
          <Image
            src={`/assets/images/map_location_${props.id}.svg`}
            alt="Warrior Location"
            style={{
              objectFit: 'cover',
              objectPosition: 'center -70px',
            }}
            fill
          />
        </div>

        <div className="text-xl font-bold">
          <div
            className="pl-3"
            style={{
              color: '#fff',
              backgroundColor: AppConfig.colors[3],
              margin: 0,
            }}
          >
            {t('location_name', {
              name: LocationDetailsDataObj.name,
            })}
          </div>
          <div className="p-3">
            <LocationDetailsAddress id={props.id} />
            <div
              style={{
                height: '.6em',
                width: '96%',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <p
                style={{
                  display: 'inline-block',
                  backgroundColor: '#eee',
                  color: AppConfig.colors[3],
                }}
                className="inline-flex items-center rounded px-4 py-2 text-sm font-bold hover:bg-gray-400"
              >
                View Details &gt;
              </p>{' '}
              <OpenStatusLabel id={props.id} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function LocationDetails(props: ILocationDetailPropList): React.ReactNode {
  const LocationDetailsDataObj: ILocationDetails = getDataObject(props);
  return (
    <Link
      href={{
        pathname: `/location/${LocationDetailsDataObj.key}`,
      }}
      className="flex w-full grow"
      style={{
        textDecoration: 'none',
        border: 'none',
        color: '#222',
      }}
    >
      <li className="flex w-full rounded-md border-2 border-solid border-gray-500 p-3 shadow-md hover:border-gray-700">
        <div className="grow flex-col">
          <span>{LocationDetailsDataObj.name}</span>
          <LocationDetailsAddress id={props.id} />
        </div>
        <div className="flex flex-col">
          <OpenStatusLabel id={props.id} />
          <span className="mt-3 text-xs text-gray-600">Details &gt;</span>
        </div>
      </li>
    </Link>
  );
}
// ${LocationDetailsDataObj.address.zipcode}
export { LocationDetails };
