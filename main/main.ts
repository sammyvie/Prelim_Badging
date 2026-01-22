import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Conference {
  city: string;
  field: string;
  image: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  title = 'Research Conferences';
  subtitle = 'Join our online events this 2026!';
  earlyBird = 'Early-Bird Registration';

  conferences: Conference[] = [
    {
      city: 'France',
      field: 'Architecture and Fine Arts',
      image:
        'https://exploreio.in/wp-content/uploads/2023/06/France-scaled.jpg',
    },
    {
      city: 'Seoul',
      field: 'Humanities and Arts',
      image:
        'https://www.civitatis.com/blog/wp-content/uploads/2024/08/shutterstock_2345265717-1280x854.jpg',
    },
    {
      city: 'San Francisco',
      field: 'Science and Technology',
      image:
        'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltc85bbcd6ff5fa0fd/650882a0a39cd61ce6ace86f/0_-_BCC-2023-THINGS-TO-DO-IN-SAN-FRANCISCO-AT-NIGHT-0.webp',
    },
    {
      city: 'Boston',
      field: 'Engineering and Tech',
      image:
        'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt35f139cc2bffb3d3/67bd8e3d304ea983d882b86c/iStock-1363326074-2-Header_Mobile.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart',
    },
  ];
}
