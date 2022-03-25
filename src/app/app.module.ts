import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './shared/material.module';
import { ClassComponent } from './components/class/class.component';
import { HttpClientModule } from '@angular/common/http';
import { ListClassPipe } from './pipes/class-name.pipe';
import { CharacterCardComponent } from './components/class/character-card/character-card.component';
import { AsCharacterPipe, AsLocationPipe, AsEpisodePipe } from './pipes/class-type-pipe.pipe';
import { LocationCardComponent } from './components/class/location-card/location-card.component';
import { EpisodeCardComponent } from './components/class/episode-card/episode-card.component';
import { PageSelecterComponent } from './components/class/page-selecter/page-selecter.component';
import { EpisodeViewComponent } from './components/episode-view/episode-view.component';
import { CharacterThumbnailComponent } from './components/episode-view/character-thumbnail/character-thumbnail.component';
import { EpisodeSelecterComponent } from './components/episode-view/episode-selecter/episode-selecter.component';
import { CompareComponent } from './components/compare/compare.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EpLinkPipe } from './pipes/ep-link.pipe';
import { LinkIdPipe } from './pipes/link-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ClassComponent,
    ListClassPipe,
    CharacterCardComponent,
    AsCharacterPipe,
    AsLocationPipe,
    AsEpisodePipe,
    LocationCardComponent,
    EpisodeCardComponent,
    PageSelecterComponent,
    EpisodeViewComponent,
    CharacterThumbnailComponent,
    EpisodeSelecterComponent,
    CompareComponent,
    EpLinkPipe,
    LinkIdPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
