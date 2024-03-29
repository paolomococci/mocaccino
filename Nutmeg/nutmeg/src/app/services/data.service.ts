import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'

import { Kind } from './../models/kind.model'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const kinds: Kind[] = []
    return {kinds}
  }

  generateId(kinds: Kind[]): number {
    return kinds.length > 0 ? Math.max(
      ...kinds.map(
        kind => kind.id
      )
    ) + 1 : 1000
  }
}
