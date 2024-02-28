import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'user',
    pathMatch:'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user-module/user-module.module').then(m => m.UserModuleModule)
  },
  {
    path: 'repo',
    loadChildren: () => import('./modules/repo-module/repo-module.module').then(m => m.RepoModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
