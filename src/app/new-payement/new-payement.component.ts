import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PayementType} from '../model/students.model';
import {StudentsService} from '../services/students.service';

@Component({
  selector: 'app-new-payement',
  standalone: false,

  templateUrl: './new-payement.component.html',
  styleUrl: './new-payement.component.css'
})
export class NewPayementComponent implements OnInit{
  payementFormGroup!:FormGroup;
  studentCode!:string;
  payementTypes:string[]=[];
  pdfFileUrl!:string;
  showProgress:boolean=false;
  constructor(private fb:FormBuilder,
              private studentService:StudentsService,private activatedRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    for(let elt in PayementType ){
      let value=PayementType[elt];
      if(typeof value === 'string'){
        this.payementTypes.push(value);
      }
    }
    this.studentCode=this.activatedRoute.snapshot.params['studentCode']
    this.payementFormGroup=this.fb.group({
      date:this.fb.control(''),
      amount:this.fb.control(''),
      type:this.fb.control(''),
      studentCode :this.fb.control(this.studentCode),
      fileSource:this.fb.control(''),
      fileName:this.fb.control('')
    })
  }

  selectFile(event: any) {
    if (event.target.files.length>0){
       let file=event.target.files[0];
       this.payementFormGroup.patchValue({
         fileSource :file,
         fileName:file.name
       });
       //this.pdfFileUrl=window.URL.createObjectURL(file);

    }
  }

  savePayement() {
      this.showProgress=true;
      let date=new Date(this.payementFormGroup.value.date);
     let formatteDate=date.getDate()+"/"+(date.getMonth()+1)+'/'+date.getFullYear();
      let formData=new FormData();
      formData.set('date',formatteDate);
      formData.set('amount',this.payementFormGroup.value.amount);
      formData.set('type',this.payementFormGroup.value.type);
      formData.set('studentCode',this.payementFormGroup.value.studentCode);
      formData.set('file',this.payementFormGroup.value.fileSource);
      this.studentService.savePayements(formData).subscribe({
        next:value => {
          this.showProgress=false;
          alert('Payement Saved successfully')
        },
        error:err => {
          console.log(err);
        }

      })

  }

  afterLoadComplete(event:any){
      console.log(event);
  }
}
