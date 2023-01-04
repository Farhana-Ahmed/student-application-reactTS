export interface AppName {
    name : string;
  }

  export interface Address {
    streetname : string;
      housenumber : number;
      postcode : string;
  }

  export interface Student {
    name : string;
    age : number;
    level : string;
    address ?: Address
  }

  export enum Level {
    Undergraduate='undergraduate',
    Postgraduate='postgraduate',  }

 