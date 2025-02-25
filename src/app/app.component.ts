import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // cursorElement!: HTMLElement; 

  ngOnInit() {
    // this.cursorElement = document.getElementById('custom-cursor')!; 
  }

  // @HostListener('mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  //   this.cursorElement.style.transform = `translate(${event.clientX - 16}px, ${event.clientY - 16}px)`; 
  // }
}