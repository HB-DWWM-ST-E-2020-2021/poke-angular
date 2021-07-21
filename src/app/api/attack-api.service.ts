import {Injectable} from '@angular/core';
import {AbstractApiService} from './abstract-api.service';
import {Attack} from './models/attack';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttackApiService extends AbstractApiService<Attack, Attack>{
  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, 'attack');
  }
}
