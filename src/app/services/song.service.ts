import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Song, SongUrl } from './data-types/common.types';
import { API_CONFIG } from './services.module';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor( private http: HttpClient, 
              @Inject(API_CONFIG) private uri: string ) { }

  //传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url
  getSongUrl(ids: string): Observable<SongUrl>{
    const params = new HttpParams().set('id', ids);

    console.log(this.uri + 'song/url', { params });
    return this.http.get(this.uri + 'song/url', { params })
      .pipe(map((res:any) => res.data));
  }

  //传入歌曲的信息，提取歌曲名称id，并传入getSongUrl 来获取歌曲影音Url。
  //然后都加入到 song中
  getSongList(songs: Song | Song[]): Observable<Song[]>{
    const songArr = Array.isArray(songs) ? songs.slice() : [songs];

    const ids = songArr.map((item: any) => item.id).join(',');
    
    return new Observable( observer => {

      this.getSongUrl(ids).subscribe( urls => {
        observer.next(this.generateSongList(songArr, urls));
      })

    })
   
  }


  private generateSongList(songs: Song[], urls: any): Song[]{
    const result:Song[] = [];
    songs.forEach( song => {
      const url = urls.find((url: { id: number; }) => url.id === song.id)?.url;
      if(url){
        // console.log( url )
        // console.log( {...song} )
        result.push({ ...song, url }) //把url加入到了song的信息中
      }
    });
    return result;
    console.log(result);
  }


}


