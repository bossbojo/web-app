import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage: number;
  @Output() currentPageChange = new EventEmitter();
  @Input() resultRow: number;
  @Input() limitRow: number;
  @Output() ChangePage = new EventEmitter();
  pagination: number[];
  paginationOver: number[];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.pagination = [];
    for (let i = 1; i <= Math.ceil(this.resultRow / this.limitRow); i++) {
      this.pagination.push(i);
    }
  }
  onChangePage(page: number) {
    this.ChangePage.emit(page);
    this.currentPageChange.emit(page);
  }
  onPagePrevious() {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage--;
    this.ChangePage.emit(this.currentPage);
    this.currentPageChange.emit(this.currentPage);
  }
  onPageNext() {
    if (this.currentPage === this.pagination[this.pagination.length - 1]) {
      return;
    }
    this.currentPage++;
    this.ChangePage.emit(this.currentPage);
    this.currentPageChange.emit(this.currentPage);
  }
  NormalizationPagination() {
    this.paginationOver = this.pagination;
    if (this.currentPage === 2) {
      this.paginationOver.splice(this.currentPage, this.currentPage);
    }
    if (this.currentPage > this.pagination[this.pagination.length - 1] - 3) {
      this.paginationOver.splice(this.currentPage, this.currentPage);
    }
  }
}
