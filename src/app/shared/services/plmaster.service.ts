import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, take, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlmasterService {
  // readonly BASE_URL = `${environment.baseUrl}api/cases/`;
  private readonly BASE_URL = `https://localhost:7228/api/plmaster`;

  constructor(private http: HttpClient) { }

  async getCaseListOfLawyerAsync(): Promise<any[]>{
    let cases = await lastValueFrom(this.http.get(this.BASE_URL).pipe(take(1)));
    //  pipe(take(1),
      //  catchError((error: Response) => {
      //    if(error.status === 400) {
      //      return throwError(new UserExitsError(error));
      //    }
      //    return throwError(new AppError(error));
      //  }
      //  )


       return cases as any;
   }
}
