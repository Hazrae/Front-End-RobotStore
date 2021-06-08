import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from 'src/app/models/store.model';
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

  items : Store;

  robotForm : FormGroup;

  constructor(
    private robotServ: RobotService,
    private forBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
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
      {console.log('erreur')};

      this.loadItems();
    });
  }

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
        if (x.Status == 1)
      {console.log('le robot a été ajouté')}      
      else
      {console.log('erreur')};

      this.loadItems();
      //this.items.Store.push(new Robot('tata',19));
      }
    );
      
  }

}
