import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor(private http: HttpClient) { }

  postFeeds(formData: FormData) {
    return firstValueFrom(this.http.post<any>('/api/post', formData))
  }
}
