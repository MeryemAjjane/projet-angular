import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentsService} from '../services/students.service';
import {Payement} from '../model/students.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-student-details',
  standalone: false,

  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{
  studentCode !:string;
  studentPayements!:Array<Payement>;
  payementDataSource!:MatTableDataSource<Payement>;
  public displayColumns=['id','date','amount','type','status','firstName','details'];
  constructor(private activatedroute :ActivatedRoute,private studentsService:StudentsService,private router: Router){
  }
  ngOnInit(): void {
    this.studentCode=this.activatedroute.snapshot.params['code'];
    this.studentsService.getStudentsPayements(this.studentCode)
      .subscribe({
          next:value => {
            this.studentPayements=value;
            this.payementDataSource=new MatTableDataSource<Payement>(this.studentPayements);

          },
        error: err => {
            console.log(err);
        }
      })
  }


  newPayement() {
    this.router.navigateByUrl(`/admin/new-payement/${this.studentCode}`);

  }

  payementDetails(payement:Payement) {
    this.router.navigateByUrl(`/admin/payement-details/${payement.id}`)

  }
}
