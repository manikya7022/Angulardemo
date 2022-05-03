import { HomepageComponent } from './Components/homepage/homepage.component';
import { FirstpageComponent } from './Components/firstpage/firstpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: FirstpageComponent},
  {path: 'first-page', component: FirstpageComponent},
  {path: 'home-page', component: HomepageComponent},
  {path: 'not-found', component: FirstpageComponent},
  {path: '**', component: FirstpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
