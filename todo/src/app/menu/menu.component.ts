import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;
  isUserLoggedIn = false;

  constructor(public hardcodedAuthenticationService
    : HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

  toggleNav(): void {
    if ( !this.isCollapsed ) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

}
