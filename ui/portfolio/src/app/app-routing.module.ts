import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bugtracker', component: BugTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
