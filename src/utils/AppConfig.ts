export interface ITimeSpan {
  hour_open: number;
  hour_close: number;
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
  imageList: Array<string>;
  services: Array<string>;
  address: IAddress;
  address_notes: string;
  phone_number: string;
  hours: ILocationHours;
}

export interface IAppConfig {
  name: string;
  locales: Array<string>;
  defaultLocale: string;
  localePrefix: string;
  colors: Array<string>;
  locationArray: Array<string>;
  locationDetailsArray: Array<ILocationDetails>;
  defaultLocationDetails: ILocationDetails;
}

export const AppConfig: IAppConfig = {
  name: "Warrior's Quick Stop",
  locales: ['en', 'es', 'bn', 'hi'],
  defaultLocale: 'en',
  localePrefix: '',
  colors: ['#ecb21d', '#852324', '#C13336', '#D45E60'],
  locationArray: ['Cle-Elum-West', 'Cle-Elum-East', 'Ellensburg'],
  locationDetailsArray: Array<ILocationDetails>(
    {
      visible: true,
      isOpen: true,
      key: 'Cle-Elum-West',
      name: 'Cle Elum West',
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
        monday: { hour_open: 4.5, hour_close: 23 },
        tuesday: { hour_open: 4.5, hour_close: 23 },
        wednesday: { hour_open: 4.5, hour_close: 23 },
        thursday: { hour_open: 4.5, hour_close: 23 },
        friday: { hour_open: 4.5, hour_close: 24 },
        saturday: { hour_open: 4.5, hour_close: 24 },
        sunday: { hour_open: 4.5, hour_close: 23 },
      },
    },
    {
      visible: true,
      isOpen: true,
      key: 'Cle-Elum-East',
      name: 'Cle Elum East',
      address: {
        line1: '912 E 1st St',
        line2: '',
        city: 'Cle Elum',
        state: 'WA',
        zipcode: 98922,
      },
      imageList: ['gas-station-night.jpg'],
      services: [],
      address_notes: '',
      phone_number: '509-899-0222',
      hours: {
        monday: { hour_open: 4.5, hour_close: 23 },
        tuesday: { hour_open: 4.5, hour_close: 23 },
        wednesday: { hour_open: 4.5, hour_close: 23 },
        thursday: { hour_open: 4.5, hour_close: 23 },
        friday: { hour_open: 4.5, hour_close: 24 },
        saturday: { hour_open: 4.5, hour_close: 24 },
        sunday: { hour_open: 4.5, hour_close: 23 },
      },
    },
    {
      visible: true,
      isOpen: false,
      key: 'Ellensburg',
      name: 'Ellensburg',
      address: {
        line1: '204 S Main St',
        line2: '',
        city: 'Ellensburg',
        state: 'WA',
        zipcode: 98926,
      },
      imageList: ['vape-girl-1.jpg', 'vape-girl-2.jpg'],
      services: [],
      address_notes: '',
      phone_number: '509-899-0222',
      hours: {
        monday: { hour_open: 4.5, hour_close: 23 },
        tuesday: { hour_open: 4.5, hour_close: 23 },
        wednesday: { hour_open: 4.5, hour_close: 23 },
        thursday: { hour_open: 4.5, hour_close: 23 },
        friday: { hour_open: 4.5, hour_close: 24 },
        saturday: { hour_open: 4.5, hour_close: 24 },
        sunday: { hour_open: 4.5, hour_close: 23 },
      },
    },
  ),
  defaultLocationDetails: {
    visible: true,
    isOpen: true,
    key: 'Cle-Elum-West',
    name: 'Cle Elum West',
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
    hours: {
      monday: { hour_open: 4.5, hour_close: 23 },
      tuesday: { hour_open: 4.5, hour_close: 23 },
      wednesday: { hour_open: 4.5, hour_close: 23 },
      thursday: { hour_open: 4.5, hour_close: 23 },
      friday: { hour_open: 4.5, hour_close: 24 },
      saturday: { hour_open: 4.5, hour_close: 24 },
      sunday: { hour_open: 4.5, hour_close: 23 },
    },
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
        monday: { hour_open: 4.5, hour_close: 23 },
        tuesday: { hour_open: 4.5, hour_close: 23 },
        wednesday: { hour_open: 4.5, hour_close: 23 },
        thursday: { hour_open: 4.5, hour_close: 23 },
        friday: { hour_open: 4.5, hour_close: 24 },
        saturday: { hour_open: 4.5, hour_close: 24 },
        sunday: { hour_open: 4.5, hour_close: 23 },
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
        monday: { hour_open: 4.5, hour_close: 23 },
        tuesday: { hour_open: 4.5, hour_close: 23 },
        wednesday: { hour_open: 4.5, hour_close: 23 },
        thursday: { hour_open: 4.5, hour_close: 23 },
        friday: { hour_open: 4.5, hour_close: 24 },
        saturday: { hour_open: 4.5, hour_close: 24 },
        sunday: { hour_open: 4.5, hour_close: 23 },
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
        monday: { hour_open: 4.5, hour_close: 23 },
        tuesday: { hour_open: 4.5, hour_close: 23 },
        wednesday: { hour_open: 4.5, hour_close: 23 },
        thursday: { hour_open: 4.5, hour_close: 23 },
        friday: { hour_open: 4.5, hour_close: 24 },
        saturday: { hour_open: 4.5, hour_close: 24 },
        sunday: { hour_open: 4.5, hour_close: 23 },
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
        monday: { hour_open: 4.5, hour_close: 23 },
        tuesday: { hour_open: 4.5, hour_close: 23 },
        wednesday: { hour_open: 4.5, hour_close: 23 },
        thursday: { hour_open: 4.5, hour_close: 23 },
        friday: { hour_open: 4.5, hour_close: 24 },
        saturday: { hour_open: 4.5, hour_close: 24 },
        sunday: { hour_open: 4.5, hour_close: 23 },
      },
    },
  },
*/
