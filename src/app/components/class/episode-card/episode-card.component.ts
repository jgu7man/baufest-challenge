import { Component, Input, OnInit } from '@angular/core';
import { IEpisode } from 'src/app/models/episode.model';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css']
})
export class EpisodeCardComponent implements OnInit {

  @Input() episode?: IEpisode;
  constructor() { }

  ngOnInit(): void {
  }

}
