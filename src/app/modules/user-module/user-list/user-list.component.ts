import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users:any=[];
  UserList:any=[];
  perPage:any = 10;
  Page:any=0;
  UserInfo: any;
  constructor(private githubservice:GithubServiceService,private router:Router)
  {
     this.getUsersList();
    //  this.displayProfile('mojombo');
  }

  async getUsersList()
  {
    this.users = []
    this.UserList = []
    let resp:any = await this.githubservice.get_users_list(this.perPage,this.Page);
    if(resp.error_code!==500)
    {
      this.users = resp.data;
      this.UserList = [];
      this.users.forEach(async (element:any) => {
          this.UserList.push({
            ...element
          })
        
      });
    }
    
  }

  async displayProfile(name:string)
  {
    // let resp:any= await this.githubservice.get_user_info(name)
    // this.UserInfo = resp.data
    this.router.navigate(['info/'+name])
    // this.UserInfo = {"login":"mojombo","id":1,"node_id":"MDQ6VXNlcjE=","avatar_url":"https://avatars.githubusercontent.com/u/1?v=4","gravatar_id":"","url":"https://api.github.com/users/mojombo","html_url":"https://github.com/mojombo","followers_url":"https://api.github.com/users/mojombo/followers","following_url":"https://api.github.com/users/mojombo/following{/other_user}","gists_url":"https://api.github.com/users/mojombo/gists{/gist_id}","starred_url":"https://api.github.com/users/mojombo/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/mojombo/subscriptions","organizations_url":"https://api.github.com/users/mojombo/orgs","repos_url":"https://api.github.com/users/mojombo/repos","events_url":"https://api.github.com/users/mojombo/events{/privacy}","received_events_url":"https://api.github.com/users/mojombo/received_events","type":"User","site_admin":false,"name":"Tom Preston-Werner","company":"@chatterbugapp, @redwoodjs, @preston-werner-ventures ","blog":"http://tom.preston-werner.com","location":"San Francisco","email":null,"hireable":null,"bio":null,"twitter_username":"mojombo","public_repos":66,"public_gists":62,"followers":23800,"following":11,"created_at":"2007-10-20T05:24:19Z","updated_at":"2024-02-08T04:58:15Z"}
  }
  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
    // this.perPage = e.length;
    this.perPage = e.pageSize;
    this.Page = e.pageIndex;
    this.getUsersList();
  }
}
