export class UpdateRestaurantRequest {
  public restaurantName?: string;
  public phone?: string;
  public street?: string;
  public number?: string;
  public postalCode?: string;
  public city?: string;
  public country?: string;


constructor(restaurantName?: string, phone?: string, street?: string, number?: string, postalCode?: string, city?: string, country?: string) {
  this.restaurantName = restaurantName;
  this.phone = phone;
  this.street = street;
  this.number = number;
  this.postalCode = postalCode;
  this.city = city;
  this.country = country;
}

}
