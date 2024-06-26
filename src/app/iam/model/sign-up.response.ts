import {UserModel} from "./user.model";

export class SignUpResponse {

  public user: UserModel;

  constructor(user: UserModel) {
    this.user = user;
  }
}
