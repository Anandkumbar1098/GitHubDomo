import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoModuleRoutingModule } from './repo-module-routing.module';
import { RepoListComponent } from './repo-list/repo-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    RepoListComponent
  ],
  imports: [
    CommonModule,
    RepoModuleRoutingModule,
    MatPaginatorModule
  ]
})
export class RepoModuleModule { }
