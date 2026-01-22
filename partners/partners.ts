import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Partner {
  name: string;
  level: string;
  link: string;
  logo: string; // image URL
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './partners.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {

  partners: Partner[] = [
    {
      name: 'TechCorp',
      level: 'Gold',
      link: 'https://techcorp.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png'
    },
    {
      name: 'GreenEnergy',
      level: 'Silver',
      link: 'https://greenenergy.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
    },
    {
      name: 'EduWorld',
      level: 'Bronze',
      link: 'https://eduworld.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
  ];
}
