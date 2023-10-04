import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic Tac Toe';
  public isAuthenticated = false;
  private _destroySub$ = new Subject<void>();
  
  constructor(@Inject(DOCUMENT) public document: Document, public _authService: AuthService) { }

  public ngOnInit(): void {
    this._authService.isAuthenticated$
      .pipe(takeUntil(this._destroySub$))
      .subscribe({
        next: (isAuthenticated: boolean) => {
          this.isAuthenticated = isAuthenticated;
        }
      });
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public logout(): void {
    this._authService.logout('/').pipe(take(1)).subscribe();
  }
}
