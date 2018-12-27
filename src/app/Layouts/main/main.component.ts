import { Component, OnInit } from '@angular/core';

declare let UIkit;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  OnClose() {
    UIkit.offcanvas('#offcanvas-push').hide();
  }
}
