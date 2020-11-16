import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean{
    if (username === 'in28Minutes' && password === 'dummy'){
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean{
    const user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout(): void {
    sessionStorage.removeItem('authenticateUser');
  }
}
