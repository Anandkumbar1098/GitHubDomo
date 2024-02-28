import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent {
  perPage =10;
  Page=0;
  total:any = 0;
  Repo_list:any= []
  constructor(private githubservice:GithubServiceService, private route:ActivatedRoute)
  {
    let name = this.route.snapshot.params['name']
    this.total = parseInt(sessionStorage.getItem(name+'_repo_count')||'0')
    this.get_repo_list(name);
  }
  async get_repo_list(name:any)
  {
    this.Repo_list = [];
    let resp:any = await this.githubservice.get_Repo_list(name,this.perPage,this.Page);
    if(resp.error_code!==500)
    {
      this.Repo_list = resp.data;
    }
  }
  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
    // this.perPage = e.length;
    this.perPage = e.pageSize;
    this.Page = e.pageIndex;
    this.get_repo_list(this.route.snapshot.params['name']);
  }
}
