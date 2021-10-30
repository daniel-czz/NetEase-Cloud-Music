import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Singer, SongSheet } from './data-types/common.types';
import { API_CONFIG, ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class SheetService {

  constructor( private http: HttpClient, 
              @Inject(API_CONFIG) private uri: string ) { }

  //歌单能看到歌单名字, 但看不到具体歌单内容, 
  //调用此接口, 传入歌单 id, 可以获取对应歌单内的所有的音乐
  getSongSheetDetail(id: number): Observable<SongSheet>{
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'playlist/detail', { params })
      .pipe(map((res:any) => res.playlist));
  }
}
