import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuItem, MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatList, MatListItem, MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { PayementsComponent } from './payements/payements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadPayementsComponent } from './load-payements/load-payements.component';
import { MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule, MatLabel} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './guards/auth.guard';
import {AuthorizationGuard} from './guards/authorization.guard';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    ProfileComponent,
    LoadStudentsComponent,
    LoginComponent,
    StudentsComponent,
    PayementsComponent,
    DashboardComponent,
    LoadPayementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatMenuTrigger,
    MatMenuItem,
    MatSidenavModule,
    MatListModule,
    MatListItem,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatDividerModule,
    MatCardTitle,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [provideAnimationsAsync(), AuthGuard,AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
