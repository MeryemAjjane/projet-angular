import {Component, OnInit} from '@angular/core';
import {StudentsService} from '../services/students.service';
import {ActivatedRoute} from '@angular/router';
import {B} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-payement-details',
  standalone: false,

  templateUrl: './payement-details.component.html',
  styleUrl: './payement-details.component.css'
})
export class PayementDetailsComponent implements OnInit{
  payementId!:number;
  pdfFileUrl!:any;
  constructor(private studentService:StudentsService,private activatedroute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.payementId=this.activatedroute.snapshot.params['id'];
    this.studentService.getPayementDetails(this.payementId).subscribe({
      next:value => {
          let blob=new Blob([value],{type:'application/pdf'});
          this.pdfFileUrl=window.URL.createObjectURL(blob);
      },error:err => {
        console.log(err);
      }

    })
  }

  afterLoadComplete(event:any) {

  }
}
