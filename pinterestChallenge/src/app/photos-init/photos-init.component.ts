import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photos-init',
  templateUrl: './photos-init.component.html',
  styleUrls: ['../photos/photos.component.css']
})
export class PhotosInitComponent implements OnInit {
  @Input() listPhotosInit = [];
  @Output() onPinInit = new EventEmitter();
  @Output() openInit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getPinInit(index: number) {
    console.log("holis " + index);
    this.onPinInit.emit(index);
  }

  pinClickInit(content: any) {
    this.openInit.emit(content);
  }

}
