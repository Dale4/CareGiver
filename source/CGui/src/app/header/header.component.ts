import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SettingsComponent } from './../settings/settings.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatIconModule, SettingsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@ViewChild('slider') slider: SettingsComponent | undefined;


  toggleSlider() {
    if(this.slider?.visible) {
      this.slider?.close(); // Close the slider if it's open
    } else { 
      this.slider?.open(); // Open the slider if it's closed
    }
  }


}
