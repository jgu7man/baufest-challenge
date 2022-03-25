import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, zip } from 'rxjs';
import { map, mergeMap, pluck, tap } from 'rxjs/operators'
import { IList, ListClass } from 'src/app/models/list.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  public className?: ListClass;
  public listClass$?: Observable<IList>
  public page?: number
  
  constructor (
    private _route: ActivatedRoute,
    private _api: ApiService
  ) { 
    this.listClass$ = combineLatest( [
      this._route.params,
      this._route.queryParams
    ]).pipe(
      mergeMap( ([params, queryParams]) => {
        this.className = params.class
        this.page = +queryParams.page || undefined

        if (!this.className) throw {text: 'La URL no es válida'}
        return this._api.get( this.className, this.page ).pipe(
          tap(list => console.log(list))
        )
      })
    )
  }

  ngOnInit(): void {
  }

}
