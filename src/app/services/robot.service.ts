import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Robot} from '../models/robot.model';
import { Observable } from 'rxjs';
import { Store } from '../models/store.model';
import { RobotResponse } from '../models/robotResponse.model';


@Injectable({
  providedIn: 'root'
})
export class RobotService {
  URI : string = 'https://localhost:44379/api/robot';

  constructor(private _client : HttpClient) { }

  getAll():Observable<Store>{
    return this._client.get<Store>(this.URI);
  }

  delete(id : number):Observable<RobotResponse>{ 
    return this._client.delete<RobotResponse>(this.URI+'/'+id);
  }

  add(newRobot: Robot):Observable<RobotResponse>{
    return this._client.post<RobotResponse>(this.URI, newRobot);
  }
}
