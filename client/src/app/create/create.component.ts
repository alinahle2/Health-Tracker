import { Component, OnInit } from '@angular/core';
import { FormGroup , NgForm ,FormControl, FormBuilder, Validators, FormArray ,AbstractControl  } from '@angular/forms';
import { ApiservesService } from '../service/apiserves.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  userForm:any
  getparamid:any
  createMessage: string = '';
  constructor(private formbuilder:FormBuilder,
    private service :ApiservesService,
    private router: ActivatedRoute,
    private route: Router

){
this.userForm =this.formbuilder.group({
name:['',Validators.required,],
water:['',Validators.required,],
step:['',Validators.required],
sleep:['',Validators.required],



} )
}
ngOnInit(): void{
this.getparamid=this.router.snapshot.paramMap.get('id');
if(this.getparamid){
  this.service.getdatabyid(this.getparamid).subscribe((res)=>{
    console.log(res,"res==>")
    this.userForm.patchValue({
      name : res.name,
      water : res.water,
      step : res.step,
      sleep : res.sleep

    })
  })
}

}
  userSubmit(){
    if(this.userForm.valid){
      console.log( this.userForm.value);
      this .service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,"res==>")
        this.userForm.reset();
        this.createMessage = `hello, ${res.name} your data inserted`;

      })

  }
  else{
    console.log("required")
  }

  }
  userupdate(){
    if(this.userForm.valid){
      console.log( this.userForm.value);
      this .service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,"updates==>")
        this.route.navigate(['/read']);

      })

  }
  else{
    console.log("required")
  }

  }
}
