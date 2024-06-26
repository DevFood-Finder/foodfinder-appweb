export class RestaurantModel {
  public id:number;
  public email: string;
  public lastname: string;
  public firstname: string;
  public street: string;
  public number: string;
  public postalCode: string;
  public city: string;
  public country: string;
  public restaurantName: string;
  public phone: string;
  public rating: number;
  public photoUrl: string;
  public streetAddress: string;

  constructor(id: number, firstname: string, lastname: string, email: string, street: string, number: string, postalCode: string, city: string, country: string, restaurantName: string, phone: string, rating: number, photoUrl: string, streetAddress: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.street = street;
    this.number = number;
    this.postalCode = postalCode;
    this.city = city;
    this.country = country;
    this.restaurantName = restaurantName;
    this.phone = phone;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.streetAddress = streetAddress
  }

}
