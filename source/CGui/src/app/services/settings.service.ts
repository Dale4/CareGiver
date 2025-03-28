import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SettingItem {
  label: string;
  checked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _items = new BehaviorSubject<SettingItem[]>([
    { label: 'Item 1', checked: false },
    { label: 'Item 2', checked: false },
    { label: 'Item 3', checked: false },
    { label: 'Item 4', checked: false },
    { label: 'Item 5', checked: false }
  ]);

  readonly items$ = this._items.asObservable();

  constructor() { }

  getItems(): SettingItem[] {
    return this._items.value;  
  }

  toggleItem(index: number) {
    const updated = [...this._items.value];
    updated[index].checked = !updated[index].checked;
    this._items.next(updated);
  }  

}
