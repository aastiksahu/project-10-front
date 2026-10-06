import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { AuthServiceService } from './auth-service.service';
import { TimetableComponent } from './timetable/timetable.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FacultyComponent } from './faculty/faculty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { CollegeComponent } from './college/college.component';
import { UserListComponent } from './user/user-list.component';
import { MyprofileComponent } from './user/myprofile.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { StudentListComponent } from './student/student-list.component';
import { RoleListComponent } from './role/role-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { SignupComponent } from './login/signup.component';
import { ForgetpasswordComponent } from './login/forgetpassword.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { CourseListComponent } from './course/course-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MarksheetmeritListComponent } from './marksheet/marksheetmerit-list.component';
import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { JasperReportComponent } from './jasper-report/jasper-report.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceListComponent } from './insurance/insurance-list.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclelistComponent } from './vehicle/vehiclelist.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TimetableComponent,
    SubjectComponent,
    StudentComponent,
    RoleComponent,
    NavbarComponent,
    MarksheetComponent,
    LoginComponent,
    FooterComponent,
    FacultyComponent,
    DashboardComponent,
    CourseComponent,
    CollegeComponent,
    UserListComponent,
    MyprofileComponent,
    ChangepasswordComponent,
    TimetableListComponent,
    SubjectListComponent,
    StudentListComponent,
    RoleListComponent,
    MarksheetListComponent,
    SignupComponent,
    ForgetpasswordComponent,
    FacultyListComponent,
    CourseListComponent,
    CollegeListComponent,
    MarksheetmeritListComponent,
    GetMarksheetComponent,
    JasperReportComponent,
    InsuranceComponent,
    InsuranceListComponent,
    VehicleComponent,
    VehiclelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],

  providers: [
    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService,
     {
      provide: HTTP_INTERCEPTORS, useClass: AuthServiceService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
