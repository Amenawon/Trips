import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

const auth_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50SWQiOjg3NTUsInVzZXJUeXBlIjoiYWRtaW4iLCJlbWFpbCI6Im9nb0Brb2JvMzYwLmNvbSIsIm1vYmlsZSI6Im9nb0Brb2JvMzYwLmNvbSIsImZpcnN0TmFtZSI6Ik9nbyIsInJvbGUiOiJDT01NUyIsImFkbWluSWQiOjg2LCJ1bmlxdWVIYXNoIjoiNWNjOTVhMWMzMzZjNyIsImlzcyI6IktvYm8zNjAiLCJpYXQiOjE1NTY2OTk2NzYsImV4cCI6MjE2MTQ5OTY3Nn0.u-c_wvRCwDCpFryvYO3_XyP9kjZyk-WygZjKWHib3yw';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modified = req.clone({setHeaders: {Authorization: 'Bearer ' + auth_token}});
        return next.handle(modified);
    }
}
