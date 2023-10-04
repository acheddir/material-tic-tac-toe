import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authSub$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public get isAuthenticated$(): Observable<boolean> {
    return this._authSub$.asObservable();
  }

  constructor(private _router: Router) { }

  public ngOnDestroy(): void {
    this._authSub$.next(false);
    this._authSub$.complete();
  }

  public login(username: string, password: string): Observable<boolean> {
    const valid = username === 'admin' && password === 's3cr3t'
    this._authSub$.next(valid);
    return of(valid);
  }

  public logout(redirect: string): Observable<void> {
    return of(void 0).pipe(tap(_ => {
      this._authSub$.next(false);
      this._router.navigate([redirect]);
    }))
  }
}
