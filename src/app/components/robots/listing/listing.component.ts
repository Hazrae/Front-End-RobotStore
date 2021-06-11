import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RobotService } from 'src/app/services/robot.service';
import { Robot } from 'src/app/models/robot.model';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styles: [
  ]
})
export class ListingComponent implements OnInit {

  items : Robot[]=[];

  robotForm : FormGroup;

  constructor(
    private robotServ: RobotService,
    private formBuilder : FormBuilder,
    private router : ActivatedRoute,
    private toast : NbToastrService
  ) { }

  ngOnInit(): void {
    //Resolver to get the Robots list 
    this.items = this.router.snapshot.data['robots'];
    this.initForm();
  }

  // Reload Robots list
  loadItems()
  {
    this.robotServ.getAll().subscribe(
      data => this.items = data
    )
  }

  //Delete Robot in DB
  onDelete(id : number)
  {
    console.log(id);
    this.robotServ.delete(id).subscribe(
      x=> {       
      //Toaster depending delete status
      if (x.Status == 1)
      {this.toast.success('Robot deleted');}
      else
      {this.toast.danger('Delete Error');   };

      this.loadItems();
    });
  }
  initForm()
  {
    this.robotForm = this.formBuilder.group(
      {
        RobotName:['', Validators.required]
      }
    )
  }

  //New Robot through form 
  //Add robot in DB
  //Append to the list
  onSubmitForm()
  {    
    const formValue = this.robotForm.value;
    const newRobot = new Robot(
     formValue['RobotName']
    );
    this.robotServ.add(newRobot).subscribe(
      x=>{
        // Toaster depending add status
        if (x.Status == 1) 
        {        
          this.items.push(new Robot(x.RobotName,x.RobotID));
          this.toast.success('Robot added');
        }    
        else
        {
          this.toast.danger('Add Error');          
        }
      });
      
  }

}
