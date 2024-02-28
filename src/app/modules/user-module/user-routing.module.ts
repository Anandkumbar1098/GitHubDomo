import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'list',
    pathMatch:'full'
  },
  {
    path: 'list',
    component:UserListComponent
  },
  {
    path: 'info/:name',
    component:UserInfoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
