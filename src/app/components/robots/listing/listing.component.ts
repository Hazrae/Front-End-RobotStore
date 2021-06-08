import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RobotService } from 'src/app/services/robot.service';
import { RobotsComponent } from '../robots.component';
import { Robot } from 'src/app/models/robot.model';


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
    private forBuilder : FormBuilder
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
      //A changer par un toaster
      if (x.Status == 1)
      {console.log('le robot a été supprimé')}
      else
      {console.log('erreur de suppression')};

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
        //console log ok ou non
        //A changer par un toaster
        if (x.Status == 1)
      {console.log('le robot a été ajouté');
      // Ajout à la liste de robots
      this.items.push(new Robot(x.RobotName,x.RobotID));
      }    
      else
      {console.log('erreur d\'ajout')};     
      
      }
    );
      
  }

}
