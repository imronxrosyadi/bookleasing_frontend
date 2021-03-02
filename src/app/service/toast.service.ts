import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  successObs = new Subject<string>();
  errorObs = new Subject<string>();

  constructor() { }

  successToast(msgStr: string): void {
    this.successObs.next(msgStr);
  }

  errorToast(msgStr: string): void {
    this.errorObs.next(msgStr);
  }

}
