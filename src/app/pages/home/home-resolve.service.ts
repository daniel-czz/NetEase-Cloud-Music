import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { first } from 'rxjs/internal/operators';
import { Banner, HotTag, Singer, SongSheet } from 'src/app/services/data-types/common.types';
import { HomeService } from 'src/app/services/home.service';
import { SingerService } from 'src/app/services/singer.service';

type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];

@Injectable({
  providedIn: 'root'
})

export class HomeResolveService implements Resolve< HomeDataType >{

  constructor(private homeService: HomeService,
              private singerService: SingerService,) { }
  
  resolve(): Observable <HomeDataType> {
    return forkJoin([  //用rxjs 的功能 forkJoin 来集中调用所有数据
     this.homeService.getBanners(),
      this.homeService.getHotTags(),
      this.homeService.getPersonalSheetList(),
      this.singerService.getEnterSinger(),

    ]).pipe(first());
  }
}
