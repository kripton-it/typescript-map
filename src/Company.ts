import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "green";

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  getMarkerContent(): string {
    return `<h1>Company Name: ${this.name}</h1>
    <p>Catchphrase: ${this.catchPhrase}</p>
    `;
  }
}
