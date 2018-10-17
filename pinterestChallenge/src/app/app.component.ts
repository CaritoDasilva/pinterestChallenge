import { Component, Input, Output } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiServiceService } from './services/api-service.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AppComponent {
  title = 'pinterestChallenge';

  public listOfPhotos = [];
  public index = 0;

  constructor(public api: ApiServiceService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

  }

  open(content) {
    this.modalService.open(content);
  }

  search(inputValue: string) {
    this.api.getPhotos(inputValue).subscribe((photos: any) => {
      console.log(photos);
      this.listOfPhotos = photos.results;
      console.log(this.listOfPhotos);
    });
  }

  public onPin(index: number) {
    console.log("########### " + index)
    console.log(this.listOfPhotos[index]);
    this.index = index;
  }

}
