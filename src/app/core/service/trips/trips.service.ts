import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const auth_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50SWQiOjg3NTUsInVzZXJUeXBlIjoiYWRtaW4iLCJlbWFpbCI6Im9nb0Brb2JvMzYwLmNvbSIsIm1vYmlsZSI6Im9nb0Brb2JvMzYwLmNvbSIsImZpcnN0TmFtZSI6Ik9nbyIsInJvbGUiOiJDT01NUyIsImFkbWluSWQiOjg2LCJ1bmlxdWVIYXNoIjoiNWNjOTVhMWMzMzZjNyIsImlzcyI6IktvYm8zNjAiLCJpYXQiOjE1NTY2OTk2NzYsImV4cCI6MjE2MTQ5OTY3Nn0.u-c_wvRCwDCpFryvYO3_XyP9kjZyk-WygZjKWHib3yw';
@Injectable({
  providedIn: 'root'
})
export class TripsService {

  url = 'https://stage.api.kobo360.com/trip';
  constructor(private httpClient: HttpClient) { }
  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', 'Bearer ' + auth_token)
  }

  get(pageNumber? :number, limit ?:number): Observable<any> {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    console.log(pageNumber)
    return this.httpClient.get(`${this.url}?page=${pageNumber}?limit=${10}`,{
      headers: headers
    });
  }
  search(searckKey: string):Observable<any>{
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.httpClient.get(`${this.url}/search?searchTerm=${searckKey}`,{
      headers: headers
    });
  
  }
}

