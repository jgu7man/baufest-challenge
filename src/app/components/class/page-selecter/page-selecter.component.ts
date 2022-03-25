import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-selecter',
  templateUrl: './page-selecter.component.html',
  styleUrls: ['./page-selecter.component.css']
})
export class PageSelecterComponent implements OnInit {

  @Input() page: number = 1
  @Input() totalPages: number = this.page

  constructor (
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigate(nav: 'next' | 'prev') {
    const navPage = nav == 'next' ? this.page + 1 : this.page - 1
    this._router.navigate([], {queryParams: {page: navPage}})
  }

}
