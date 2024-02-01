import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cards = [{}, {}, {}, {}];
}
// import {Component} from '@angular/core';
// import {MatIconModule} from '@angular/material/icon';

// /**
//  * @title Basic icons
//  */
// @Component({
//   selector: 'icon-overview-example',
//   templateUrl: 'icon-overview-example.html',
//   standalone: true,
//   imports: [MatIconModule],
// })
// export class IconOverviewExample {}