import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Angular will provide the AuthService class to the entire application
})
export class AuthService {
  private token = 'MyFakeToken';

  getToken(): string {
    return this.token;
  }
}
