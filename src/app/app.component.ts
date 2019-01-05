import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  support = true;
  OnWindowResize() {
    // if (window.innerWidth < 1336) {
    //   this.support = false;
    // } else {
    //   this.support = true;
    // }
  }
}
