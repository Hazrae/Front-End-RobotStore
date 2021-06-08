import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Robot} from '../models/robot.model';
import { Observable } from 'rxjs';
import { RobotResponse } from '../models/robotResponse.model';


@Injectable({
  providedIn: 'root'
})
export class RobotService {
  URI : string = 'https://localhost:44379/api/robot';

  constructor(private _client : HttpClient) { }

  //GET robots list
  getAll():Observable<Robot[]>{
    return this._client.get<Robot[]>(this.URI);
  }
  //DELETE robot with id - return status
  delete(id : number):Observable<RobotResponse>{ 
    return this._client.delete<RobotResponse>(this.URI+'/'+id);
  }
  //POST new robot - return robot with ID and status
  add(newRobot: Robot):Observable<RobotResponse>{
    return this._client.post<RobotResponse>(this.URI, newRobot);
  }
}
