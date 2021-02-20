import faker from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  companyName: string;
  companyCatchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';
  markerContent(): string {
    return `<div><h3>${this.companyName}</h3><p>${this.companyCatchPhrase}</p></div>`;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.companyCatchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
