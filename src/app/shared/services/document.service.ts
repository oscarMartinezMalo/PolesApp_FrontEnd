import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  readonly BASE_URL = `${environment.baseUrl}api/documents/`;
  
  constructor( private http: HttpClient) {}

  uploadDocument(fd: FormData){       
    return this.http.post(this.BASE_URL, fd, {
      responseType: 'text',
      reportProgress: true,
      observe: 'events'
    })
  }
}
