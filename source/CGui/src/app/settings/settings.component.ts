import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ this is needed

import { SettingsService, SettingItem } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  visible = false;
  items: SettingItem[] = [];

  constructor(private settingsService: SettingsService) {}

  ngOnInit() {
    this.items = this.settingsService.getItems();
  }

  onToggle(index: number) {
    this.settingsService.toggleItem(index);
  }  

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }  

}
