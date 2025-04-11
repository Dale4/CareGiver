import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cust-apply',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cust-apply.component.html',
  styleUrl: './cust-apply.component.css'
})
export class CustApplyComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  activeSection: string = 'start';
  sections = [
    { id: 'start', label: 'Start' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact Information' },
    { id: 'app1', label: 'Application 1 Questions' },
    { id: 'app2', label: 'Application 2 Questions' },
  ];

  app1Options = ['Yes', 'No', 'Maybe'];
  selectedApp1Option: string = '';
  
  

  ngAfterViewInit() {
   
    const fakeEvent = new Event('scroll');
    this.onScroll(fakeEvent);
  }

  scrollTo(sectionId: string) {
    console.log('scrollTo called with sectionId:', sectionId);
    const headerOffset = 65; // height of your fixed header in pixels (adjust as needed)
    const element = document.getElementById(sectionId);
    
    if (element) {
      //element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const container = this.scrollContainer.nativeElement as HTMLElement;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset; 
      
      container.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Update the active section after scrolling
      this.activeSection = sectionId;
    }
  }

  onScroll(event: Event) {
    const scrollElement = this.scrollContainer.nativeElement as HTMLElement;
  
    const sections = ['start', 'resume', 'contact', 'app1', 'app2'];
  
    for (let sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const elTop = el.getBoundingClientRect().top - scrollElement.getBoundingClientRect().top;
        if (elTop < 100) {
          this.activeSection = sectionId;
        }
      }
    }
  }
  

  onButtonClick() {
    console.log('Button clicked!');
  }

}
