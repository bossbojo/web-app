import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  Id: number[] = [];
  Data: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  currentPage = 1;
  resultRow = 95;
  limitRow = 10;
  constructor() { }

  ngOnInit() {
  }
  OnPickTable(event: Event) {
    if (event.target['checked']) {
      this.Id.push(event.target['id']);
    } else {
      this.Id = this.Id.filter((val) => {
        return val !== event.target['id'];
      });
    }
  }
  onChangePage(e) {
    console.log(e);
  }
}
