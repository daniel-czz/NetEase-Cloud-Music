import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/internal/operators';
import { Singer, Song, SongSheet } from './data-types/common.types';
import { API_CONFIG, ServicesModule } from './services.module';
import { SongService } from './song.service';

@Injectable({
  providedIn: ServicesModule
})
export class SheetService {

  constructor(private http: HttpClient, 
              @Inject(API_CONFIG) private uri: string,
              private songService: SongService,             
  ) { }

   
  //调用此接口, 传入歌单 id, 可以获取对应歌单内的所有信息
  // http://localhost:3000/playlist/detail?id=2301227992
  getSongSheetDetail(id: number): Observable<SongSheet>{
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'playlist/detail', { params })
      .pipe(map((res: any) => res.playlist));
  }

  //在获取歌单信息后，获取其中的tracks（歌曲）信息。
  //然后向getSongList传入 track 的信息。
  playSheet (id: number): Observable<Song[]>{
    return this.getSongSheetDetail(id)
      .pipe(pluck('tracks'), switchMap( tracks => this.songService.getSongList(tracks)))
  }

}
