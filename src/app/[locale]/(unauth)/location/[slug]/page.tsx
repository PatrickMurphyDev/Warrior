/* eslint-disable no-unsafe-optional-chaining */
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import type { ILocationDetails } from '@/utils/AppConfig';
import { AppConfig } from '@/utils/AppConfig';

type ILocationDetailPropsSlug = {
  params: { slug: string; locale: string };
};

const amLabel = <span className="text-xs"> am</span>;
const pmLabel = <span className="text-xs"> pm</span>;
const daysOfWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];
const currentDayOfWeekInt = new Date().getDay();
const currentDayOfWeek = daysOfWeek[currentDayOfWeekInt];

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

function LocationDetailDirectionsPanel(props: ILocationDetailPropsSlug) {
  const data =
    AppConfig.locationDetailsArray[
      AppConfig.locationArray.indexOf(props.params.slug)
    ];
  // ✔️
  return (
    <div className="relative m-1 rounded border border-solid border-gray-300 p-1 shadow-md">
      <h3
        style={{ borderBottom: `2px solid ${AppConfig.colors[1]}` }}
        className="mb-1 pl-1"
      >
        Where to Find Us
      </h3>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'inline-block',
          overflow: 'hidden',
          position: 'relative',
          minHeight: 150,
        }}
      >
        <Image
          src={`/assets/images/map_location_${props.params.slug}.svg`}
          alt="Map of Location"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 40%',
            transform: 'scale(1.5)',
          }}
          fill
        />
      </div>
      <div className="relative" id="locations_slug_location-panel-details">
        <a
          href={
            'https://www.google.com/maps/dir/?api=1&destination=' +
            `${data?.address.line1}%20${data?.address.city},%20${data?.address.state}%20${data?.address.zipcode}`
          }
          target="_blank"
          className="inline-flex items-center rounded bg-gray-300 px-4 py-2 text-lg font-bold text-gray-800 hover:bg-gray-400"
          style={{ position: 'absolute', top: 0, right: 0 }}
        >
          <span>🧭</span>
          <span>Get Directions</span>
        </a>
        <span className="text-lg">
          <span className="inline-block align-top text-sm font-bold">
            Address:
          </span>
          <p
            className="inline-block w-2/4 text-sm"
            style={{ marginTop: 0, marginBottom: 0, marginLeft: 8 }}
          >
            <a
              href={
                'https://www.google.com/maps/dir/?api=1&destination=' +
                `${data?.address.line1}%20${data?.address.city},%20${data?.address.state}%20${data?.address.zipcode}`
              }
              target="_blank"
            >
              {`${data?.address.line1}`}
              <br />
              <span className="text-xs">
                {`${data?.address.city}, ${data?.address.state} ${data?.address.zipcode}`}
              </span>
            </a>
          </p>
        </span>
        <div className="text-gray-500">
          <span className="text-xs font-bold">Notes:</span>
          <span
            className="text-xs"
            style={{ marginTop: 0, marginBottom: 3, marginLeft: 8 }}
          >
            {data?.address_notes}
          </span>
        </div>
        <div className="text-base">
          <span>Phone: {data?.phone_number}</span>
        </div>
        <div className="flex flex-row text-center text-base">
          <div className="flex-1">✅ Tap Pay</div>
          <div className="flex-1">✅ EBT</div>
          <div className="flex-1">✅ Bathroom</div>
        </div>
      </div>
    </div>
  );
}

function LocationDetailHoursInfoPanel(props: ILocationDetailPropsSlug) {
  const data: ILocationDetails | undefined =
    AppConfig.locationDetailsArray[
      AppConfig.locationArray.indexOf(props.params.slug)
    ];
  const hoursMapFn = function displayDaysOfWeek(elt: string) {
    let hr;
    let hrOpen = 4;
    let minOpen = 0;
    let hrClose = 11; // convert from 24 hr time
    let minClose = 0;

    if (data?.hours) {
      hr = data.hours[elt as keyof typeof data.hours];
      hrOpen = hr?.hour_open % 12;
      hrClose = hr?.hour_close % 12; // convert from 24 hr time
      if (hr?.minute_open) {
        minOpen = hr.minute_open;
      }
      if (hr?.minute_close) {
        minClose = hr.minute_close;
      }
    }

    let label = 'pm';
    if (hrClose === 0) {
      hrClose = 12; // mod sets to zero if 12
      label = 'am';
    }
    let dayOfWeekRowStyle = {};
    if (elt === currentDayOfWeek) {
      dayOfWeekRowStyle = { fontWeight: 'bold' };
    }
    return (
      <tr key={elt} style={dayOfWeekRowStyle}>
        <td>{elt.charAt(0).toUpperCase() + elt.slice(1)}</td>
        <td>
          {`${hrOpen}:${minOpen.toString().padStart(2, '0')}`}
          {amLabel}
        </td>
        <td className="text-xs">to</td>
        <td>
          {`${hrClose}:${minClose.toString().padStart(2, '0')}`}
          {label === 'am' ? amLabel : pmLabel}
        </td>
      </tr>
    );
  };
  return (
    <div className="relative m-1 rounded border border-solid border-gray-300 p-1 shadow-md">
      <h3
        style={{ borderBottom: `2px solid ${AppConfig.colors[1]}` }}
        className="mb-1 pl-1"
      >
        Hours of Operation
      </h3>
      <table className="w-full text-sm">
        {Array.from(daysOfWeek).map(hoursMapFn)}
      </table>
      <p
        className="text-xs text-gray-600"
        style={{ marginTop: 4, marginBottom: 3 }}
      >
        <span className="text-sm">⛽</span>at the pump 24<sub>hrs</sub> w/
        Credit or Debit
      </p>
    </div>
  );
}

function LocationDetailPhotosPanel(props: ILocationDetailPropsSlug) {
  const data =
    AppConfig.locationDetailsArray[
      AppConfig.locationArray.indexOf(props.params.slug)
    ];
  const imgUrl = `/assets/images/${data?.imageList[0]}`;

  return (
    <div className="relative m-1 rounded border border-solid border-gray-300 p-1 shadow-md">
      <h3
        style={{ borderBottom: `2px solid ${AppConfig.colors[1]}` }}
        className="mb-1 pl-1"
      >
        Photos
      </h3>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'inline-block',
          overflow: 'hidden',
          position: 'relative',
          minHeight: 150,
          top: 0,
        }}
      >
        <Image
          src={imgUrl}
          alt="Photo of our store, Warrior's Quick Stop"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
          fill
        />
      </div>
      <Link href={`${data?.key}/photos`}>
        <div className="inline-flex w-full items-center rounded bg-gray-300 px-4 py-2 text-center text-sm font-bold text-gray-800 hover:bg-gray-400">
          <span>🔎 </span>
          <span>View {data?.imageList.length} Photos</span>
        </div>
      </Link>
    </div>
  );
}

function LocationDetailServicesPanelContents(props: ILocationDetailPropsSlug) {
  const data =
    AppConfig.locationDetailsArray[
      AppConfig.locationArray.indexOf(props.params.slug)
    ] || AppConfig.defaultLocationDetails;
  return (
    <div>
      <h3
        style={{ borderBottom: `4px solid ${AppConfig.colors[1]}` }}
        className="mb-1"
      >
        Services
      </h3>
      <ul className="ml-10 list-outside list-disc">
        {Array.from(data.services).map((elt) => (
          <li id={elt} key={elt}>
            {elt}
          </li>
        ))}
      </ul>
    </div>
  );
}

const LocationDetailPage = (props: ILocationDetailPropsSlug) => {
  const t = useTranslations('LocationSlug');
  const data =
    AppConfig.locationDetailsArray[
      AppConfig.locationArray.indexOf(props.params.slug)
    ];

  return (
    <div>
      <h1
        style={{ borderBottom: `4px solid ${AppConfig.colors[1]}` }}
        className="mb-1 capitalize"
      >
        {t('header', { slug: data?.name })}
      </h1>
      <div className="relative w-full">
        <div
          className="inline-block w-full align-top md:w-3/12"
          style={{ top: 0 }}
        >
          <LocationDetailHoursInfoPanel params={props.params} />
        </div>
        <div className="inline-block w-full align-top md:w-6/12">
          <LocationDetailDirectionsPanel params={props.params} />
        </div>
        <div className="inline-block w-full align-top md:w-3/12">
          <LocationDetailPhotosPanel params={props.params} />
        </div>
      </div>
      <br className="clear-both" />
      <div>
        <LocationDetailServicesPanelContents params={props.params} />
      </div>
    </div>
  );
};
// <p>{t('content')}</p>
export const dynamicParams = false;

export default LocationDetailPage;
