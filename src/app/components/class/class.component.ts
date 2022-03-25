import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators'
import { IList, ListClass, IQueries } from 'src/app/models/list.model';
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
  public queryCtrl: FormControl = new FormControl('');
  
  constructor (
    private _route: ActivatedRoute,
    public api: ApiService,
    private _router: Router
  ) { 
    this.listClass$ = combineLatest( [
      this._route.params,
      this._route.queryParams
    ] ).pipe(
      delay(100),
      mergeMap( ([params, queryParams]) => {
        this.className = params.class
        this.page = +queryParams.page || undefined

        if (!this.className) throw {text: 'La URL no es válida'}
        return this.api.get( this.className, queryParams as IQueries )
      }),
    )
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if ( this.queryCtrl.value ) {
      const name = this.queryCtrl.value.split(' ').join('%20')
      this._router.navigate( [], {
        queryParams: {
          ...this._route.snapshot.queryParams,
          name
      }})
    }
  }

  onCompare() {
    let charactersQueried = this.api.selected.join( ',' )
    this._router.navigate(['compare'], {queryParams: {chars: charactersQueried}})
  }

}
