import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesModule, API_CONFIG } from './services.module';
import { Banner, HotTag, SongSheet } from './data-types/common.types';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators'


@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor( private http: HttpClient, 
              @Inject(API_CONFIG) private uri: string ) { }

  //获取走马灯信息
  getBanners(): Observable<Banner[]>{ 
    return this.http.get( this.uri + 'banner')
      .pipe(map((res: any) => res.banners))
  }

  //获取热门歌单分类
  getHotTags(): Observable<HotTag[]>{
    return this.http.get(this.uri + "playlist/hot")
      .pipe((map((res: any) =>{
        return res.tags.sort((x: HotTag, y: HotTag)=> { x.position-y.position }).slice(0,5)
      })
      ));
  }

  //获取推荐歌单
  getPersonalSheetList(): Observable<SongSheet[]>{
    return this.http.get(this.uri + "personalized")
      .pipe((map((res: any) => res.result.slice(0,16))));
  }
}
