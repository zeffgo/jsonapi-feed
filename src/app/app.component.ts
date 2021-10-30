import { Component } from '@angular/core';

export const APP_NAME = 'Jsonfeed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = APP_NAME;
}
