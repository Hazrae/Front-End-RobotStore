import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Robot } from 'src/app/models/robot.model';
import { RobotService } from 'src/app/services/robot.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styles: [
  ]
})
export class FindComponent implements OnInit {
  item : Robot;
  findForm : FormGroup;

  constructor(
    private robotServ : RobotService,
    private formBuilder : FormBuilder,
    private toast : NbToastrService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm()
  {
    this.findForm = this.formBuilder.group(
      {
        RobotID:['', Validators.required]
      }
    )
  }

  onSubmitForm()
  {    
    const formValue = this.findForm.value;
    const id = formValue['RobotID'];
    this.robotServ.getOne(id).subscribe(
      x=>{        
        if (x.RobotID != -1) 
        {        
          this.item = x;          
        }    
        else
        {
          //reset robot
          this.item = null;
          this.toast.danger('Robot doesn\'t exist');          
        }
      });
      
  }

}
