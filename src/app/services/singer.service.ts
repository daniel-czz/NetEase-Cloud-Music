import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesModule, API_CONFIG } from './services.module';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators'
import { Singer } from './data-types/common.types';
// import queryString from 'query-string'
import { HttpParams } from '@angular/common/http'

interface SingerParams {
  limit: number;    // 返回数量 default 30
  offset: number;   // 分页  default 30
  type?: number;     //-1:全部  1:男歌手  2:女歌手  3:乐队
  area?: number;     //-1:全部  7华语  96欧美  8:日本  16韩国  0:其他
}



@Injectable({
  providedIn: ServicesModule
})
export class SingerService {

  defaultParams: SingerParams = {
  limit: 9,    // 返回数量 default 30
  offset: 0,   // 分页  default 30
  type: -1,     //-1:全部  1:男歌手  2:女歌手  3:乐队
}

  constructor( private http: HttpClient, 
              @Inject(API_CONFIG) private uri: string ) { }

  //获取入驻歌手信息
  getEnterSinger(): Observable<Singer[]>{ 
    // const params = new HttpParams({ formString: queryString.stringify(args) })
    //http://localhost:3000/artist/list?type=-1&offset=30&limit=20
    
    return this.http.get( this.uri + 'artist/list?' + '&type='   + `${this.defaultParams.type}`
                                                   + '&offset=' + `${this.defaultParams.offset}`
                                                   +  '&limit=' + `${this.defaultParams.limit}`)
      .pipe(map((res: any) => res.artists))
  }


}
