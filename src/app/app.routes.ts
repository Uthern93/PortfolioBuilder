import { Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HomeComponent } from './page/homepage/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'dashboard', component: DashboardComponent },
];
