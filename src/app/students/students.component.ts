import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from '../services/students.service';
import {Student} from '../model/students.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: false,

  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  students! :Array<Student>;
  studentDataSource! : MatTableDataSource<Student>;
  displayColumns:string[]=['id','firstName','lastName','code','programId','payements'];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  constructor(private studentsService:StudentsService,private router:Router) {
  }
  ngOnInit(): void {
        this.studentsService.getAllStudents()
          .subscribe({
            next:value => {
             this.students=value;
             this.studentDataSource=new MatTableDataSource<Student>(this.students);
             this.studentDataSource.paginator=this.paginator;
             this.studentDataSource.sort=this.sort;
            },
            error:err => {
              console.error(err)
            }
          })
  }

  studentsPayements(student:Student) {
       this.router.navigateByUrl(`/admin/student-details/${student.code}`);

  }
}
