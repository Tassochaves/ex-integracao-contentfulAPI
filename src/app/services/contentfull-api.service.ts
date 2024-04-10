import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfullApiService {

  constructor() { }

  private client = createClient({
    space: 'Space ID',
    accessToken: 'Content Delivery API - access token'
  });

  obterDados(){
    const promise = this.client.getEntries();
    return from(promise);
  }
}
