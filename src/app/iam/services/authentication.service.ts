import {Injectable} from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SignInRequest} from "../model/sign-in.request";
import {SignInResponse} from "../model/sign-in.response";
import {environment} from "../../../environments/environment";
import {SignUpRequest} from "../model/sign-up.request";
import {SignUpResponse} from "../model/sign-up.response";
import {UpdateClientRequest} from "../model/update-client.request";
import {UserModel} from "../model/user.model";
import {UpdateRestaurantRequest} from "../model/update-restaurant.request";
import {Restaurant} from "../../restaurant/Restaurant";
import {RestaurantModel} from "../model/restaurant.model";

/**
 * Service for authentication.
 * @summary
 * This service provides methods for signing up, signing in, and signing out.
 * It also provides observables for the signed in status, the signed-in user ID, and the signed-in username.
 */
@Injectable({providedIn: 'root'})
export class AuthenticationService {
  basePath: string = `${environment.serverBasePath}`;
  httpOptions = { headers: new HttpHeaders({'Content-type': 'application/json'}) };

  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private lastRegisteredId: number = 0;

  constructor(private router: Router, private http: HttpClient) { }

  get isSignedIn() { return this.signedIn.asObservable();}

  get currentUserId() { return this.signedInUserId.asObservable(); }

  get lastRegisteredUserId() { return this.lastRegisteredId; }
  get currentUsername() { return this.signedInUsername.asObservable(); }

  /**
   * Sign up a new user.
   * @param signUpRequest The sign up request.
   * @returns The sign up response.
   */
  signUpClient(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpResponse>(`${this.basePath}/auth/register-client`, signUpRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          console.log(`Signed up as ${response.user.email} with id: ${response.user.id}`);
          this.lastRegisteredId = response.user.id;
          this.router.navigate(['/update-client']).then();
        },
        error: (error) => {
          console.error(`Error while signing up: ${error}`);
          this.router.navigate(['/register-client']).then();
        }
      });
  }


  UpdateClient(updateClientRequest: UpdateClientRequest) {
    return this.http.put<UserModel>(`${this.basePath}/clients/${this.lastRegisteredId}`, updateClientRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          console.log(`Updated ${response.email} with id: ${response.id}`);
          console.log(`Changed NickName to ${updateClientRequest.nickName}`);
          this.router.navigate(['/login']).then();
        },
        error: (error) => {
          console.error(`Error while signing up: ${error}`);
          this.router.navigate(['/register-client']).then();
        }
      });

  }


  GetRestaurantById(id:number){
    return this.http.get<RestaurantModel>(`${this.basePath}/Restaurants/${id}`, this.httpOptions);
  }

  UpdateRestaurant(updateRestaurantRequest: UpdateRestaurantRequest) {

    return this.http.put<UserModel>(`${this.basePath}/Restaurants/${this.lastRegisteredId}`, updateRestaurantRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          console.log(`Updated ${response.email} with id: ${response.id}`);
          console.log(`Updated restaurant name to ${updateRestaurantRequest.restaurantName}`);
          console.log(`Updated phone to ${updateRestaurantRequest.phone}`);
          this.router.navigate(['/login']).then();
        },
        error: (error) => {
          console.error(`Error while signing up: ${error}`);
          this.router.navigate(['/register-restaurant']).then();
        }
      });

  }

  signUpRestaurant(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpResponse>(`${this.basePath}/auth/register-Restaurant`, signUpRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          console.log(`Signed up as ${response.user.email} with id: ${response.user.id}`);
          this.lastRegisteredId = response.user.id;
          this.router.navigate(['/update-restaurant']).then();
        },
        error: (error) => {
          console.error(`Error while signing up: ${error}`);
          this.router.navigate(['/register-restaurant']).then();
        }
      });
  }

  GetAllRestaurants(){
    return this.http.get<RestaurantModel[]>(`${this.basePath}/Restaurants`, this.httpOptions);
  }


  /**
   * Sign in a user.
   * @param signInRequest The sign in request.
   * @returns The sign in response.
   */
  signIn(signInRequest: SignInRequest) {
    console.log(signInRequest);
    return this.http.post<SignInResponse>(`${this.basePath}/auth/login`, signInRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          this.signedIn.next(true);
          this.signedInUserId.next(response.user.id);
          this.signedInUsername.next(response.user.email);
          localStorage.setItem('token', response.token);
          console.log(`Signed in as ${response.user.email} with token ${response.token}`);
          this.router.navigate(['/home']).then();
        },
        error: (error) => {
          this.signedIn.next(false);
          this.signedInUserId.next(0);
          this.signedInUsername.next('');
          console.error(`Error while signing in: ${error}`);
          this.router.navigate(['/login']).then();
        }
      });
  }

  /**
   * Sign out a user.
   *
   * This method signs out a user by clearing the token from local storage and navigating to the sign-in page.
   */
  signOut() {
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInUsername.next('');
    localStorage.removeItem('token');
    this.router.navigate(['/login']).then();
  }
}

