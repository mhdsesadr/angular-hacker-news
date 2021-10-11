import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  topStories: Array<any> = [];

  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getTopStoriesIDs().subscribe((res: any) => {
      res.splice(0, 5).forEach((id: number) => {
        this.apiService.getItem(id).subscribe(story => {
          this.topStories.push(story);
        });
      });
    })
  }

}
