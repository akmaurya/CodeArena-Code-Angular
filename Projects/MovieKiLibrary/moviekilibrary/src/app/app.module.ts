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
    MovieTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ReadJsonDataService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
