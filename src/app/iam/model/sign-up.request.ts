export class SignUpRequest {

  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;
  public street: string;
  public number: string;
  public postalCode: string;
  public city: string;
  public country: string;

  constructor(firstname: string, lastname: string, email: string, password: string, street: string, number: string, postalCode: string, city: string, country: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.street = street;
    this.number = number;
    this.postalCode = postalCode;
    this.city = city;
    this.country = country;
  }

}
