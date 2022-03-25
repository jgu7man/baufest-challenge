import { Component, Input, OnInit } from '@angular/core';
import { ILocation } from 'src/app/models/locations.model';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {

  @Input() location?: ILocation

  constructor() { }

  ngOnInit(): void {
  }

}
