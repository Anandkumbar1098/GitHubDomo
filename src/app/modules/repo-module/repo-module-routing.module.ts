import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoListComponent } from './repo-list/repo-list.component';

const routes: Routes = [
  {path:':name', component:RepoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoModuleRoutingModule { }
