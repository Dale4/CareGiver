import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from "./header/header.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';

  constructor(private titleService: Title) {
    this.titleService.setTitle('CareGiver');
    this.title = this.titleService.getTitle();
  }
  
}
