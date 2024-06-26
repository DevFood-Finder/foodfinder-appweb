export class UserModel {
  public id:number;
  public email: string;
  public lastname: string;
  public firstname: string;
  public street: string;
  public number: string;
  public postalCode: string;
  public city: string;
  public country: string;

  constructor(id: number, firstname: string, lastname: string, email: string, street: string, number: string, postalCode: string, city: string, country: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.street = street;
    this.number = number;
    this.postalCode = postalCode;
    this.city = city;
    this.country = country;
  }

}
