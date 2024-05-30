import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {CustomHttpResponse, Profile} from '../interface/appstates';
import {User} from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly server: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  login$ = (email: string, password: string) => <Observable<CustomHttpResponse<Profile>>>
    this.http.post<CustomHttpResponse<Profile>>
    (`${this.server}/user/login`, {email, password})
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  verifyCode$ = (email: string, code: string) => <Observable<CustomHttpResponse<Profile>>>
    this.http.get<CustomHttpResponse<Profile>>
    (`${this.server}/user/verify/code/${email}/${code}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  profile$ = () => <Observable<CustomHttpResponse<Profile>>>
    this.http.get<CustomHttpResponse<Profile>>
    (`${this.server}/user/profile`, {headers: new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTZWN1cmVDYXBpdGEiLCJhdWQiOiJDVVNUT01FUl9NQU5BR0VNRU5UX1NFUlZJQ0UiLCJpYXQiOjE3MTcwNTg5MzEsInN1YiI6IjEiLCJhdXRob3JpdGllcyI6WyJSRUFEO1VTRVIiLCJSRUFEOkNVU1RPTUVSIiwiQ1JFQVRFOlVTRVIiLCJDUkVBVEU6Q1VTVE9NRVIiLCJVUERBVEU6VVNFUiIsIlVQREFURTpDVVNUT01FUiJdLCJleHAiOjE3MTcwNjA3MzF9.FUkD6nV9DVESKXvgS2PLxiYTCpBMpNSXLSqLgGDYA6Jux0sGPIt-nxcbfifOXHnAjnouEhip3kgJZKfx37qOaw')})
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  update$ = (user: User) => <Observable<CustomHttpResponse<Profile>>>
    // console.log(user);
    this.http.patch<CustomHttpResponse<Profile>>
    (`${this.server}/user/update`, user, {headers: new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTZWN1cmVDYXBpdGEiLCJhdWQiOiJDVVNUT01FUl9NQU5BR0VNRU5UX1NFUlZJQ0UiLCJpYXQiOjE3MTcwNTg5MzEsInN1YiI6IjEiLCJhdXRob3JpdGllcyI6WyJSRUFEO1VTRVIiLCJSRUFEOkNVU1RPTUVSIiwiQ1JFQVRFOlVTRVIiLCJDUkVBVEU6Q1VTVE9NRVIiLCJVUERBVEU6VVNFUiIsIlVQREFURTpDVVNUT01FUiJdLCJleHAiOjE3MTcwNjA3MzF9.FUkD6nV9DVESKXvgS2PLxiYTCpBMpNSXLSqLgGDYA6Jux0sGPIt-nxcbfifOXHnAjnouEhip3kgJZKfx37qOaw')})
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `A client error occurred - ${error.error.message}`;
    } else {
      if (error.error.reason) {
        errorMessage = error.error.reason;
        console.log(errorMessage);
      } else {
        errorMessage = `An error occurred - Error status ${error.status}`;
      }
    }
    return throwError(() => errorMessage);
  }
}
