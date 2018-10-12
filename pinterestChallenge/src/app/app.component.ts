import { Component, Input, Output } from '@angular/core';

import { ApiServiceService } from './services/api-service.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinterestChallenge';

 public listOfPhotos = [];

 constructor(public api: ApiServiceService) {
  }

  search(inputValue:string){
    this.api.getPhotos(inputValue).subscribe((photos: any) => {
      console.log(photos);
      this.listOfPhotos = photos.results;
      console.log(this.listOfPhotos);
    });
  }
}
