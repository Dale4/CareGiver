import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from "./header/header.component";
import { SettingsComponent } from './settings/settings.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SettingsComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';

  @ViewChild('slider') slider: SettingsComponent | undefined;
  
  constructor(private titleService: Title) {
    this.titleService.setTitle('CareGiver');
    this.title = this.titleService.getTitle();
  }

 
  
}
