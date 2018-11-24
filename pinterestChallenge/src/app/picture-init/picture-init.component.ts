import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-init',
  templateUrl: './picture-init.component.html',
  styleUrls: ['../picture/picture.component.css']
})
export class PictureInitComponent implements OnInit {
  @Input() result;

  constructor() { }

  ngOnInit() {
  }

}
