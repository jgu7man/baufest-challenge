import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './components/class/class.component';
import { CompareComponent } from './components/compare/compare.component';
import { EpisodeViewComponent } from './components/episode-view/episode-view.component';
import { HomeComponent } from './components/home/home.component';
// import { routes } from './routes';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'list/:class', component: ClassComponent },
  { path: 'episode/:id', component: EpisodeViewComponent },
  { path: 'compare', component: CompareComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
