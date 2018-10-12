import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';


import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  
  @Input() listOfPhotos = [];

  constructor() {
  }

  ngOnInit() {
  }

}
