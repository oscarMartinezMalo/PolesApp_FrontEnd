import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterListComponent } from './Components/master-list/master-list.component';

const routes: Routes = [
  { path: "home", component: MasterListComponent },
  {  path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
