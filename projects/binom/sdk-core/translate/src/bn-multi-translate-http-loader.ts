import { HttpBackend, HttpClient } from '@angular/common/http'
import { TranslateLoader } from '@ngx-translate/core'
import { deepmerge } from 'deepmerge-ts'
import { forkJoin, Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

export interface BnTranslationResource {
  prefix: string
  optional?: boolean
}

export class BnMultiTranslateHttpLoader implements TranslateLoader {
  constructor(
    private _handler: HttpBackend,
    private _resourcesPrefix: string[] | BnTranslationResource[],
  ) {}

  public getTranslation(lang: string): Observable<any> {
    const requests: Observable<Object | {}>[] = this._resourcesPrefix.map((resource) => {
      let path: string
    
      if (typeof resource === 'object') path = resource?.prefix + lang + '.json'
      else path = `${resource}${lang}.json`

      return new HttpClient(this._handler).get(path).pipe(
        catchError((res) => {
          if (typeof resource === 'object' && !resource.optional) {
            console.error('Error in file:', path)
          }
          return of({})
        }),
      )
    });

    return forkJoin(requests).pipe(
      map((responses) => {
        const objectsToMerge = responses.filter(response => typeof response === 'object');
        if (objectsToMerge.length > 0) {
          return deepmerge(...objectsToMerge);
        } else {
          return {};
        }
      }));
  }
}