import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RobotService } from 'src/app/services/robot.service';
import { RobotsComponent } from '../robots.component';
import { Robot } from 'src/app/models/robot.model';
import { NbToastrService } from '@nebular/theme';


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
    private forBuilder : FormBuilder,
    private toast : NbToastrService
  ) { }

  ngOnInit(): void {
    //resolver plus opti
    this.loadItems();
    this.initForm();
  }

  loadItems()
  {
    this.robotServ.getAll().subscribe(
      data => this.items = data
    )
  }

  onDelete(id : number)
  {
    console.log(id);
    this.robotServ.delete(id).subscribe(
      x=> {       
      //test statut de la suppression
      if (x.Status == 1)
      {this.toast.success('Robot deleted');}
      else
      {this.toast.danger('Delete Error');   };

      this.loadItems();
    });
  }
  //initialisation formulaire d'ajout
  initForm()
  {
    this.robotForm = this.forBuilder.group(
      {
        RobotName:['', Validators.required]
      }
    )
  }

  onSubmitForm()
  {    
    const formValue = this.robotForm.value;
    const newRobot = new Robot(
     formValue['RobotName']
    );
    this.robotServ.add(newRobot).subscribe(
      x=>{
        // test statut de l'ajout
        if (x.Status == 1) 
        {           
          // Ajout à la liste de robots
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
