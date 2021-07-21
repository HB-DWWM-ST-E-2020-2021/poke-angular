import {Injectable} from '@angular/core';
import {AbstractApiService} from './abstract-api.service';
import {Type} from './models/type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeApiService extends AbstractApiService<Type, Type>{
  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, 'type');
  }
}
