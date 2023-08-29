import { Component, ElementRef, ViewChild } from '@angular/core';
import { FeedsService } from 'src/app/feeds.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent {

  @ViewChild('picture')
  picture!: ElementRef

  @ViewChild('comments')
  comments!: ElementRef

  constructor(private feedsSvc: FeedsService) { }

  postFeeds(comments: string) {
    const formData = new FormData;
    formData.set('picture', this.picture.nativeElement.files[0])
    formData.set('comments', comments)
    this.feedsSvc.postFeeds(formData)
        .then(
          result => {
            console.log(result['result'])
          }
        )
  }
}
