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
    this.NormalizationPagination();
  }
  onChangePage(page: number) {
    this.ChangePage.emit(page);
    this.currentPageChange.emit(page);
    this.NormalizationPagination();
  }
  onPagePrevious() {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage--;
    this.onChangePage(this.currentPage);
  }
  onPageNext() {
    if (this.currentPage === this.pagination[this.pagination.length - 1]) {
      return;
    }
    this.currentPage++;
    this.onChangePage(this.currentPage);
  }
  NormalizationPagination() {
    this.paginationOver = this.pagination;
    const pageAll = Math.ceil(this.resultRow / this.limitRow);
    if (this.currentPage >= 1 && this.currentPage <= 3) {
      this.paginationOver = this.paginationOver.slice(1, 6);
    } else if (this.currentPage >= pageAll - 3) {
      this.paginationOver = this.paginationOver.slice(pageAll - 6, pageAll - 1);
    } else if (this.currentPage > 3 && this.currentPage < pageAll - 3) {
      this.paginationOver = this.paginationOver.slice(
        (this.currentPage - 3) < 1 ? 1 : (this.currentPage - 3), (this.currentPage + 2) >= pageAll ? pageAll - 1 : (this.currentPage + 2)
      );
    }
  }
}
