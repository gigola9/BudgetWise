import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  loading = false;

  constructor(private _loading: LoadingService) { }

  ngOnInit(): void {
    // this.listenToLoading();
  }

  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
