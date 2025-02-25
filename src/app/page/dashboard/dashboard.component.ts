import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, DynamicInputComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  name: string = '';
  email: string = '';
  linkedin: string = '';
  phone: string = '';
  workExperiences: { title: string; company: string; duration: string }[] = [{ title: '', company: '', duration: '' }];
  educations: { level: string; institution: string }[] = [{ level: '', institution: '' }];
  skills: string[] = [''];
  certificates: string[] = [''];
  selectedFile: File | null = null;
  uploadedFileName: string = '';

  onSubmit() {
    // Handle form submission logic here
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('LinkedIn:', this.linkedin);
    console.log('Phone:', this.phone);
    console.log('Work Experiences:', this.workExperiences);
    console.log('Educations:', this.educations);
    console.log('Skills:', this.skills);
    console.log('Certificates:', this.certificates);
    if (this.selectedFile) {
      console.log('Uploaded File:', this.selectedFile.name);
    }
    // You can also implement further logic to send this data to a server
  }

  addWorkExperience() {
    this.workExperiences.push({ title: '', company: '', duration: '' });
  }

  removeWorkExperience(index: number) {
    this.workExperiences.splice(index, 1);
  }

  addEducation() {
    this.educations.push({ level: '', institution: '' });
  }

  removeEducation(index: number) {
    this.educations.splice(index, 1);
  }

  addSkill() {
    this.skills.push('');
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }

  addCertificate() {
    this.certificates.push('');
  }

  removeCertificate(index: number) {
    this.certificates.splice(index, 1);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFileName = file.name;
    }
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.uploadedFileName = files[0].name;
      // You can also call onFileChange if you want to handle the file further
      // this.onFileChange({ target: { files } });
    }
  }
}