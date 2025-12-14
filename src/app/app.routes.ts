// import { Routes } from '@angular/router';

// export const routes: Routes = [];

// app.routes.ts
import { Routes } from '@angular/router';

// Make sure to import all your new components
import { HomeComponent } from './home/home';
import { ProfileComponent } from './profile/profile';
import { SkillsComponent } from './skills/skills';
import { ProjectsComponent } from './projects/projects';
import { EducationComponent } from './education/education';
import { ContactsComponent } from './contacts/contacts';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '' } // Fallback for invalid paths
];
