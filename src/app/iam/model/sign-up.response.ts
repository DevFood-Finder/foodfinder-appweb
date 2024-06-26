import {User} from "./user";

export class SignUpResponse {

  public user: User;

  constructor(user: User) {
    this.user = user;
  }
}
