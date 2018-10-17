
import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {




  constructor(public http: HttpClient,

  ) { }

  public getPhotos(inputValue: string) {
    return this.http.get(`https://api.unsplash.com/search/photos?client_id=dd6c0c50a9281f0f00586ac990e865eed32c0d2c845091f20a9f74a694178e4b&client_secret=9bd6a121e44ecd4a7c34ce9a24b5f8065e850300517544cfe722223043770e17?page=100&query=${inputValue};`);
  }


}


