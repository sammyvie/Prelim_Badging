import { Routes } from '@angular/router';
import { MainComponent } from './main/main';
import { PartnersComponent } from './partners/partners';
import { AboutComponent } from './about/about';
import { JoinUsComponent } from './join-us/join-us';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'join-us', component: JoinUsComponent },
];
