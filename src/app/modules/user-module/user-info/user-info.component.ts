import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  UserInfo: any;

  constructor(private githubservice:GithubServiceService,private route:ActivatedRoute,private router:Router)
  {
    let name = this.route.snapshot.params['name'];
    this.displayProfile(name);
  }
  async displayProfile(name:string)
  {
    let resp:any= await this.githubservice.get_user_info(name)
    this.UserInfo = resp.data
  }

  nagiavteTORepo(url:string)
  {
    sessionStorage.setItem(url+'_repo_count',this.UserInfo.public_repos);
    this.router.navigateByUrl('repo/'+url);
  }
}
