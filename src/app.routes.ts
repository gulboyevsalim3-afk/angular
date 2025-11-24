
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { CommunityComponent } from './pages/community.component';
import { FindCareComponent } from './pages/find-care.component';
import { AssistantComponent } from './pages/assistant.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'find-care', component: FindCareComponent },
  { path: 'assistant', component: AssistantComponent },
  { path: '**', redirectTo: '' }
];
