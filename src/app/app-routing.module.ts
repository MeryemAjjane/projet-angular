import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {PayementsComponent} from './payements/payements.component';
import {StudentsComponent} from './students/students.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoadPayementsComponent} from './load-payements/load-payements.component';
import {LoadStudentsComponent} from './load-students/load-students.component';
import {LoginComponent} from './login/login.component';
import {AdminTemplateComponent} from './admin-template/admin-template.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthorizationGuard} from './guards/authorization.guard';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {NewPayementComponent} from './new-payement/new-payement.component';
import {PayementDetailsComponent} from './payement-details/payement-details.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminTemplateComponent,
    canActivate:[AuthGuard],
    children:[
      {path:"home",component:HomeComponent},
      {path:"profile",component:ProfileComponent},
      {path:"loadStudents",component:LoadStudentsComponent,
      canActivate:[AuthorizationGuard],data:{roles:['ADMIN']}},

      {path:"loadPayements",component:LoadPayementsComponent},
      {path:"dashboard",component:DashboardComponent},
      {path:"students",component:StudentsComponent},
      {path:"payements",component:PayementsComponent},
      {path:"student-details/:code",component:StudentDetailsComponent},
      {path:"new-payement/:studentCode",component:NewPayementComponent},
      {path:"payement-details/:id",component:PayementDetailsComponent},


    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
