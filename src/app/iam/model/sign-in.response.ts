import {UserModel} from "./user.model";

export class SignInResponse {

  public user: UserModel;
  public token: string;

  constructor(user:UserModel, token: string) {
    this.token = token;
    this.user = user;
  }

}
