import { Injectable } from '@angular/core';
// import { NotifierService } from 'angular-notifier';
import { Domain, Git_url } from '../configs/Url_Config';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private httpService:HttpService
    // ,private notifierService: NotifierService
    ) { }

  async get_users_list(perPage:any,page:any)
  {
    let action =  Domain+Git_url.users_list+`?per_page=${perPage}&page=${page}`
   let resp:any= await this.httpService.get(action);  
   if(resp?.error_code==500)
   {
    // this.notifierService.notify('failure',resp?.message);
   }
   return resp;
  }
  async get_user_info(name:string)
  {
    let resp:any= await this.httpService.get((Domain+Git_url.user).replace('{username}',name))  
   if(resp?.error_code==500)
   {
    // this.notifierService.notify('failure',resp?.message);
   }
   return resp;
  }
  async get_Repo_list(name:string,perPage:any,page:any)
  {
    let action = (Domain+Git_url.repo_list).replace('{username}',name)
    action += `?per_page=${perPage}&page=${page}`;
    let resp:any= await this.httpService.get(action)  
   if(resp?.error_code==500)
   {
    // this.notifierService.notify('failure',resp?.message);
   }
   return resp;
  }
}
