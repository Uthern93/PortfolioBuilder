import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatGridListModule, 
    HeaderComponent, 
    FooterComponent, 
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  isFirstVisit = false;
  
  @ViewChildren('fadeSection') fadeSections!: QueryList<ElementRef>;

  ngOnInit() {
    // Check if it's the first visit using localStorage
    const firstVisit = localStorage.getItem('firstVisit');

    if (!firstVisit) {
      this.isFirstVisit = true;
      localStorage.setItem('firstVisit', 'true');
    }
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    this.fadeSections.forEach(section => {
      observer.observe(section.nativeElement);
    });
  }
}
