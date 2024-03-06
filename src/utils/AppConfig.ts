import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: LocalePrefix = 'as-needed';

export interface ITimeSpan {
  hour_open: number;
  minute_open?: number;
  hour_close: number;
  minute_close?: number;
}
export interface ILocationHours {
  monday: ITimeSpan;
  tuesday: ITimeSpan;
  wednesday: ITimeSpan;
  thursday: ITimeSpan;
  friday: ITimeSpan;
  saturday: ITimeSpan;
  sunday: ITimeSpan;
}

export interface IAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  zipcode: number;
}
export interface ILocationDetails {
  visible: boolean;
  isOpen: boolean;
  key: string;
  name: string;
  description: string;
  imageList: Array<string>;
  services: Array<string>;
  address: IAddress;
  address_notes: string;
  phone_number: string;
  hours: ILocationHours;
}
export interface IAboutPageDetails {
  imageSrcURL: string;
  pageTitle: string;
  phoneNumber: string;
  address: IAddress;
  email: string;
  staff: Array<String>;
}

export interface IAppConfig {
  name: string;
  locales: Array<string>;
  defaultLocale: string;
  localePrefix: LocalePrefix;
  colors: Array<string>;
  locationArray: Array<string>;
  locationDetailsArray: Array<ILocationDetails>;
  defaultLocationDetails: ILocationDetails;
  aboutPageDetails: IAboutPageDetails;
}
export interface INumberRange {
  minNumber: number;
  maxNumber: number;
}

export const AppConfig: IAppConfig = {
  name: "Warrior's Quick Stop",
  locales: ['en', 'es', 'bn', 'hi'],
  defaultLocale: 'en',
  localePrefix,
  colors: ['#ecb21d', '#852324', '#C13336', '#D45E60'],
  locationArray: ['Cle_Elum_West', 'Cle_Elum_East', 'Ellensburg'],
  locationDetailsArray: Array<ILocationDetails>(
    {
      visible: true,
      isOpen: true,
      key: 'Cle_Elum_West',
      name: 'Cle Elum West',
      description: '',
      address: {
        line1: '901 E 1st St',
        line2: '',
        city: 'Cle Elum',
        state: 'WA',
        zipcode: 98922,
      },
      imageList: ['gas-station-night.jpg'],
      services: ['Gas', 'Hot Food', 'Car Wash'],
      address_notes: 'Located less than a mile from exit 87 on I-90.',
      phone_number: '509-899-0222',
      hours: {
        monday: { hour_open: 5, minute_open: 0, hour_close: 24 },
        tuesday: { hour_open: 5, minute_open: 0, hour_close: 24 },
        wednesday: { hour_open: 5, minute_open: 0, hour_close: 24 },
        thursday: { hour_open: 5, minute_open: 0, hour_close: 24 },
        friday: { hour_open: 5, minute_open: 0, hour_close: 24 },
        saturday: { hour_open: 5, minute_open: 0, hour_close: 24 },
        sunday: { hour_open: 5, minute_open: 0, hour_close: 24 },
      },
    },
    {
      visible: true,
      isOpen: true,
      key: 'Cle_Elum_East',
      name: 'Cle Elum East',
      description: '',
      address: {
        line1: '912 E 1st St',
        line2: '',
        city: 'Cle Elum',
        state: 'WA',
        zipcode: 98922,
      },
      imageList: ['gas-station-night.jpg'],
      services: ['Oil Changes', 'Tire Services'],
      address_notes: '',
      phone_number: '509-899-0222',
      hours: {
        monday: { hour_open: 8, minute_open: 0, hour_close: 19 },
        tuesday: { hour_open: 8, minute_open: 0, hour_close: 19 },
        wednesday: { hour_open: 8, hour_close: 19 },
        thursday: { hour_open: 8, hour_close: 19, minute_close: 0 },
        friday: { hour_open: 8, minute_open: 0, hour_close: 19 },
        saturday: { hour_open: 8, minute_open: 0, hour_close: 19 },
        sunday: { hour_open: 8, minute_open: 0, hour_close: 19 },
      },
    },
    {
      visible: true,
      isOpen: false,
      key: 'Ellensburg',
      name: 'Ellensburg',
      description:
        'The Warrior Quick Stop just recently opened on 204 S Main, Ellensburg, WA, we are convenience store and gas station offering a wide variety of products for people on the go. If you need great hot food, sodas, or freezing cold Slushies or Icees we have them here. If you need an ATM, please stop by. Our fast and friendly team is always happy to serve you! We will see you on the road in the future. Thank you for stoping in',
      address: {
        line1: '204 S Main St',
        line2: '',
        city: 'Ellensburg',
        state: 'WA',
        zipcode: 98926,
      },
      imageList: [
        'vape-girl-1.jpg',
        'vape-girl-2.jpg',
        'vape-girl-1.jpg',
        'vape-girl-2.jpg',
        'vape-girl-1.jpg',
        'vape-girl-2.jpg',
        'vape-girl-1.jpg',
        'vape-girl-2.jpg',
        'vape-girl-1.jpg',
        'vape-girl-2.jpg',
      ],
      services: [
        'Gasoline & Diesel',
        'Propane',
        'Disposable Vapes',
        'Refillable Vapes',
        'Cigarettes & Beer',
      ],
      address_notes:
        'At the corner of Capitol Ave and Main St, 1 block from Fred Meyer.',
      phone_number: '509-899-0222',
      hours: {
        monday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        tuesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        wednesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        thursday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        friday: { hour_open: 4, minute_open: 30, hour_close: 24 },
        saturday: { hour_open: 4, minute_open: 30, hour_close: 24 },
        sunday: { hour_open: 4, minute_open: 30, hour_close: 23 },
      },
    },
  ),
  defaultLocationDetails: {
    visible: true,
    isOpen: true,
    key: 'Cle_Elum_West',
    name: 'Cle Elum West',
    description: '',
    address: {
      line1: '901 E 1st ST',
      line2: '',
      city: 'Cle Elum',
      state: 'WA',
      zipcode: 98926,
    },
    imageList: ['gas-station-night.jpg'],
    services: ['Gas', 'Hot Food', 'Car Wash'],
    address_notes: '',
    phone_number: '',
    hours: {
      monday: { hour_open: 4, minute_open: 30, hour_close: 23 },
      tuesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
      wednesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
      thursday: { hour_open: 4, minute_open: 30, hour_close: 23 },
      friday: { hour_open: 4, minute_open: 30, hour_close: 24 },
      saturday: { hour_open: 4, minute_open: 30, hour_close: 24 },
      sunday: { hour_open: 4, minute_open: 30, hour_close: 23 },
    },
  },
  aboutPageDetails: {
    imageSrcURL: '/assets/images/bmw-outside.jpg',
    pageTitle: "About Warrior's Quick Stop",
    phoneNumber: '(509) 899-5555',
    email: 'warriorquickstop@gmail.com',
    address: {
      line1: '204 S Main St',
      line2: '',
      city: 'Ellensburg',
      state: 'WA',
      zipcode: 98926,
    },
    staff: ['Victor Singh', 'Harsh Singh', 'Gary Singh'],
  },
};

/*
locationData: {
    'Cle-Elum-North': {
      visible: true,
      isOpen: true,
      id: 'Cle-Elum-North',
      name: 'Cle Elum North',
      address: {
        line1: '901 E 1st ST',
        line2: '',
        city: 'Cle Elum',
        state: 'WA',
        zipcode: 98926,
      },
      hours: {
        monday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        tuesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        wednesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        thursday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        friday: { hour_open: 4, minute_open: 30, hour_close: 24 },
        saturday: { hour_open: 4, minute_open: 30, hour_close: 24 },
        sunday: { hour_open: 4, minute_open: 30, hour_close: 23 },
      },
    },
    'Cle-Elum-South': {
      visible: true,
      isOpen: true,
      id: 'Cle-Elum-South',
      name: 'Cle Elum South',
      address: {
        line1: '101 E 1st ST',
        line2: '',
        city: 'Cle Elum',
        state: 'WA',
        zipcode: 98926,
      },
      hours: {
        monday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        tuesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        wednesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        thursday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        friday: { hour_open: 4, minute_open: 30, hour_close: 24 },
        saturday: { hour_open: 4, minute_open: 30, hour_close: 24 },
        sunday: { hour_open: 4, minute_open: 30, hour_close: 23 },
      },
    },
    Ellensburg: {
      visible: true,
      isOpen: false,
      id: 'Ellensburg',
      name: 'Ellensburg',
      address: {
        line1: '204 S Main ST',
        line2: '',
        city: 'Ellensburg',
        state: 'WA',
        zipcode: 98926,
      },
      hours: {
        monday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        tuesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        wednesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        thursday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        friday: { hour_open: 4, minute_open: 30, hour_close: 24 },
        saturday: { hour_open: 4, minute_open: 30, hour_close: 24 },
        sunday: { hour_open: 4, minute_open: 30, hour_close: 23 },
      },
    },
    Yakima: {
      visible: true,
      isOpen: true,
      id: 'Yakima',
      name: 'Yakima',
      address: {
        line1: '901 E 1st ST',
        line2: '',
        city: 'Yakima',
        state: 'WA',
        zipcode: 98926,
      },
      hours: {
        monday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        tuesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        wednesday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        thursday: { hour_open: 4, minute_open: 30, hour_close: 23 },
        friday: { hour_open: 4, minute_open: 30, hour_close: 24 },
        saturday: { hour_open: 4, minute_open: 30, hour_close: 24 },
        sunday: { hour_open: 4, minute_open: 30, hour_close: 23 },
      },
    },
  },
*/
