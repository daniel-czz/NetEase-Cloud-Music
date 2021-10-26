import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { Banner, HotTag, SongSheet } from 'src/app/services/data-types/common.types';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor( private homeService: HomeService) {
    this.getBanners();
    this.getHotTags();
    this.getPoersonalizedSheetList();
   }

  ngOnInit(): void {
  }

  banners: Banner[] = []; 
  carouselActiveIndex = 0;
  hotTags: HotTag[] = []; //热门歌单分类
  songSheetList: SongSheet[] = []; //推荐歌单

  // 引入走马灯component
  @ViewChild(NzCarouselComponent, {static: true }) private nzCarousel!: NzCarouselComponent;  
  


  //走马灯轮播图的相关功能--------------------------------------------------------------------------------
  onBeforeChange( e?:any ): void {
    // event 中传入的是 {from: ,to: }
    // console.log( e.to );
    this.carouselActiveIndex = e.to;
  }

  onChangeslide( type: 'pre' | 'next' ){ 
    // type 中传入的是 {next 或者 pre } --> https://ng.ant.design/components/carousel/zh
    this.nzCarousel[type]();  
  }

  private getBanners(){
    this.homeService.getBanners().subscribe( banners => {
      // console.log( "banner: " + JSON.stringify(banners) )
      this.banners = banners;
    })
  }


  //获取热门歌单分类--------------------------------------------------------------------------------
  private getHotTags(){
    this.homeService.getHotTags().subscribe(tags => {
        this.hotTags = tags;
        console.log(this.hotTags);
      })
    
  }

  //获取推荐歌单--------------------------------------------------------------------------------
  private getPoersonalizedSheetList(){
    this.homeService.getPersonalSheetList().subscribe(sheets => {
        this.songSheetList = sheets;
        console.log(this.songSheetList);
      });
  }


  
}



