import { Address } from "./address.model";

export class User {
  id: number = 0;
  name: string = '';
  username: string = '';
  email: string = '';
  address: Address;
  phone: string = '';
  website: string = '';
}