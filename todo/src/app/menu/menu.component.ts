import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    if ( !this.isCollapsed ) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

}
