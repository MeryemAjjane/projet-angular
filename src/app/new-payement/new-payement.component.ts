import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-payement',
  standalone: false,

  templateUrl: './new-payement.component.html',
  styleUrl: './new-payement.component.css'
})
export class NewPayementComponent implements OnInit{
  payementFormGroup!:FormGroup;
  studentCode!:string;
  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.studentCode=this.activatedRoute.snapshot.params['studentCode']
    this.payementFormGroup=this.fb.group({
      date:this.fb.control(''),
      amount:this.fb.control(''),
      type:this.fb.control(''),
      studentCode :this.fb.control(this.studentCode),
      file:this.fb.control('')
    })
  }

}