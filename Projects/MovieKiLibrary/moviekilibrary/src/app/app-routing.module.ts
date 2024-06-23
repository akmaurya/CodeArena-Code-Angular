import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhojpuriComponent } from './bhojpuri/bhojpuri.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { ShortMovieComponent } from './short-movie/short-movie.component';
import { SouthComponent } from './south/south.component';
import { ThreeDMovieComponent } from './three-d-movie/three-d-movie.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bollywood', component: BollywoodComponent },
  { path: 'hollywood', component: HollywoodComponent },
  { path: 'south', component: SouthComponent },
  { path: 'bhojpuri', component: BhojpuriComponent },
  { path: 'shortmovie', component: ShortMovieComponent },
  { path: '3dmovie', component: ThreeDMovieComponent },
  { path: 'series', component: SeriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
