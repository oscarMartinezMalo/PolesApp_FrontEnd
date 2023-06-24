import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, take, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlmasterService {
  private readonly BASE_URL = `${environment.baseUrl}api/plmaster/`;

  constructor(private http: HttpClient) { }

  async getPlMasterListAsync(): Promise<any[]>{
    let cases = await lastValueFrom(this.http.get(this.BASE_URL).pipe(take(1)));

    return cases as any;
   }
}
