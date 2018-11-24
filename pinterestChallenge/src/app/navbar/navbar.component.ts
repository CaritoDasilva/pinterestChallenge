import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //ES UNA PROPIEDAD
  @Output() onSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onKey(event) {
    const inputValue = event.target.value;
    this.onSearch.emit(inputValue);
  }

  keyPressOnForm = function (event) {

    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

}
