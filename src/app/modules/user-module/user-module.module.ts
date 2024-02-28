import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserInfoComponent } from './user-info/user-info.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatPaginatorModule
  ]
})
export class UserModuleModule { }
