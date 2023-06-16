import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private selectedToolbarAndFooterOptionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private selectedTitleOptionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');


  setSelectedToolbarAndFooterOption(option: string) {
    this.selectedToolbarAndFooterOptionSubject.next(option);
  }

  getSelectedToolbarAndFooterOption(): Observable<string> {
    return this.selectedToolbarAndFooterOptionSubject.asObservable();
  }

  setSelectedTitleOption(option: string) {
    this.selectedTitleOptionSubject.next(option);
  }

  getSelectedTitleOption(): Observable<string> {
    return this.selectedTitleOptionSubject.asObservable();
  }
}