import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Collection} from './models/collection';

export abstract class AbstractApiService<T, L> {
  readonly baseUrl: string;

  constructor(
    private httpClient: HttpClient,
    resourceName: string,
  ) {
    this.baseUrl = `https://localhost:8000/api/${resourceName}/`;
  }

  getCollection(page: number = 1): Observable<Collection<L>> {
    return this.httpClient.get<Collection<L>>(this.baseUrl, {
      params: {
        page: page.toString(),
      },
    });
  }

  getItem(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}/${id}`);
  }
}
