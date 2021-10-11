import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() itemID = 0;

  comments: Array<any> = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getItem(this.itemID).subscribe((res: any) => {
      res.kids?.forEach((id: number) => {
        this.apiService.getItem(id).subscribe((comment: any) => {
          this.comments.push(comment);
        })
      })
    })
  }

}
