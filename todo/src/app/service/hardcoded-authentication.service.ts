import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean{
    if (username === 'in28Minutes' && password === 'dummy'){
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean{
    const user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout(): void {
    sessionStorage.removeItem('authenticaterUser');
  }
}
