import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent {
  @Input() inputType: string = ''; // Type of input (e.g., 'work', 'education', 'skill', 'certificate')
  @Input() data: any = {}; // Data object for the input
  @Output() remove = new EventEmitter<void>(); // Event emitter for removing the input

  // Emit the remove event when the button is clicked
  onRemove() {
    this.remove.emit();
  }
} 