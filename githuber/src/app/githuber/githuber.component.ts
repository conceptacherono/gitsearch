import { Component, OnInit } from '@angular/core';
import { GithuberService } from '../githuber.service';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';

@Component({
  selector: 'app-githuber',
  templateUrl: './githuber.component.html',
  styleUrls: ['./githuber.component.css']
})
export class GithuberComponent implements OnInit {
  user!: any;
  repos!: any[];
  username!: string;

  constructor(private githuberService: GithuberService,
    private http:HttpClient) { }

    findUser() {
     
      this.githuberService.getUser(this.username).subscribe((data) => {
    
      
        // console.table(data)
           return this.user=data;
          
        },(error)=>{
      alert("please write the correct username")
    });
      
    }

    findRepo() {
      // this.gitsearchService.updateUser(this.username);
      this.githuberService.getRepos(this.username).subscribe((data) => {
    
       this.repos=data
        // console.log(this.repos)
          return this.repos=data;
          
        },(error: any) =>{
          console.log(error);
          }
      )
    }


  ngOnInit(): void {
    this.username="conceptacherono"
    this.findUser()
    this.findRepo()
  }

}