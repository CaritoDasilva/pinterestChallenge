import { Component, Input, Output, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiServiceService } from './services/api-service.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class AppComponent implements OnInit {
  title = 'pinterestChallenge';
  public listOfPhotos = [];
  public index = 0;
  public listPhotosInit = [];
  public showPhotos: string = "showInit";

  constructor(public api: ApiServiceService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

  }

  ngOnInit() {
    console.log("método oninit");
    this.api.getPhotosInit().subscribe((photos: any) => {
      console.log(photos);
      this.listPhotosInit = photos.results;
      console.log(this.listPhotosInit);
    });
  };

  public open(content) {
    this.modalService.open(content);
  }

  public openInit(content2) {
    this.modalService.open(content2);
  }


  search(inputValue: string) {
    this.api.getPhotos(inputValue).subscribe((photos: any) => {
      console.log(photos);
      this.listOfPhotos = photos.results;
      console.log(this.listOfPhotos);

    });
  }
  screenChange(inputValue: string) {
    if (inputValue.length > 0) {
      this.showPhotos = 'showSearch';
      console.log(this.showPhotos);
      console.log(`este es el largo${inputValue.length}`);
    } else {
      this.showPhotos = 'showInit';
      console.log(this.showPhotos);
    }
  }

  public onPin(index: number) {
    console.log("########### " + index)
    console.log(this.listOfPhotos[index]);
    this.index = index;
  }

  public onPinInit(index: number) {
    console.log("########### " + index)
    console.log(this.listOfPhotos[index]);
    this.index = index;
  }

}
