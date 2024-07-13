import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { SouthComponent } from './south/south.component';
import { BhojpuriComponent } from './bhojpuri/bhojpuri.component';
import { ShortMovieComponent } from './short-movie/short-movie.component';
import { ThreeDMovieComponent } from './three-d-movie/three-d-movie.component';
import { SeriesComponent } from './series/series.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { ReadJsonDataService } from './read-json-data.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BollywoodComponent,
    HollywoodComponent,
    SouthComponent,
    BhojpuriComponent,
    ShortMovieComponent,
    ThreeDMovieComponent,
    SeriesComponent,
    MovieTileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ReadJsonDataService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
