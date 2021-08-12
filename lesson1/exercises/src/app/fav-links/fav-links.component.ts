import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
   favLinks = ["https://us02web.zoom.us/j/89267815535?pwd=T2Z4STBqdHFCRmhUMFRpcFo1TkNlUT09#success", 
   "https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html"]

  constructor() { }

  ngOnInit() {
  }

}
