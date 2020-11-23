import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromService: string;

  // ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params[`name`];
  }

  getWelcomeMessage(): void {
    // console.log(this.service.executeHellowWorldBeanService());

    this.service.executeHellowWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    // console.log('last line of getWelcomeMessage');
  }

  getWelcomeMessageWithParameter(): void {
    // console.log(this.service.executeHellowWorldBeanService());

    this.service.executeHellowWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    // console.log('last line of getWelcomeMessage');
  }

  handleSuccessfulResponse(response: any): any{
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any): any {
    this.welcomeMessageFromService = error.error.message;
  }

}
