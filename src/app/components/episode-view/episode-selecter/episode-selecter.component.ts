import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode-selecter',
  templateUrl: './episode-selecter.component.html',
  styleUrls: ['./episode-selecter.component.css']
})
export class EpisodeSelecterComponent implements OnInit {

  @Input() episode?: number

  constructor (
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate( nav: 'next' | 'prev' ) {
    if ( this.episode ) {
      const navEp = nav == 'next' ? this.episode + 1 : this.episode - 1
      this._router.navigate(['/episode', navEp])
    }
  }

}
