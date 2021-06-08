import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Robot } from '../models/robot.model';
import { RobotService } from '../services/robot.service';

@Injectable({
  providedIn: 'root'
})
export class RobotresolverService implements Resolve<Robot[]>{

  constructor(
    private robotServ : RobotService
  ) { }

  resolve() : Observable<Robot[]>
  {
    return this.robotServ.getAll();
  }
}
