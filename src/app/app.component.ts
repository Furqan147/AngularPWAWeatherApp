import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { filter, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  constructor(private updates: SwUpdate, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.updates.versionUpdates.pipe(
      switchMap(() => this.snackBar.open('A new version is available!', 'Update now')
        .afterDismissed()),
      filter(result => result.dismissedByAction),
      map(() => this.updates.activateUpdate().then(() =>
        location.reload()))
    ).subscribe();
  }
}
