import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() result;

  constructor() { }

  ngOnInit() {
    console.log(this.result);
  }

}
