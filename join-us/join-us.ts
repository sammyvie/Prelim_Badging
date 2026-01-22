import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './join-us.html',
  styleUrls: ['./join-us.css'],
})
export class JoinUsComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    institution: '',
  };

  submitForm() {
    console.log(this.user);
    alert('Form submitted successfully!');
  }
}
