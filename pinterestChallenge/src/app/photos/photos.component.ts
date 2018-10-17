import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';


import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() listOfPhotos = [];
  @Output() onPin = new EventEmitter();
  @Output() open = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getPin(index: number) {
    console.log("holis " + index);
    this.onPin.emit(index);
  }

  pinClick(content: any) {
    this.open.emit(content);
  }

}
