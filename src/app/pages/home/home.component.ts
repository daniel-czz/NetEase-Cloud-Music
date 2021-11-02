import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { map } from 'rxjs/internal/operators';
import { Banner, HotTag, SongSheet, Singer } from 'src/app/services/data-types/common.types';
import { SheetService } from 'src/app/services/sheet.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private sheetServices: SheetService) {
                this.route.data.pipe(map(res => res.homeDatas)).subscribe( ([banners, hotTags, songSheetList, singers]) => { //利用结构赋值
                  // console.log( "res: " + JSON.stringify(res));
                  this.banners = banners;
                  this.hotTags = hotTags;
                  this.songSheetList = songSheetList;
                  this.singers = singers;
                  console.log(this.banners);
                });
                // this.getBanners();
                // this.getHotTags();
                // this.getPoersonalizedSheetList();
                // this.getEnterSinger();
              }

  ngOnInit(): void {
  }

  banners: Banner[] = []; 
  carouselActiveIndex = 0;
  hotTags: HotTag[] = []; //热门歌单分类
  songSheetList: SongSheet[] = []; //推荐歌单
  singers: Singer[] = []; //入驻歌手
  

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

  // private getBanners(){
  //   this.homeService.getBanners().subscribe( banners => {
  //     // console.log( "banner: " + JSON.stringify(banners) )
  //     this.banners = banners;
  //   })
  // }


  // //获取热门歌单分类--------------------------------------------------------------------------------
  // private getHotTags(){
  //   this.homeService.getHotTags().subscribe(tags => {
  //       this.hotTags = tags;
  //       // console.log(this.hotTags);
  //     })
    
  // }

  // //获取推荐歌单--------------------------------------------------------------------------------
  // private getPoersonalizedSheetList(){
  //   this.homeService.getPersonalSheetList().subscribe(sheets => {
  //       this.songSheetList = sheets;
  //       console.log(this.songSheetList);
  //     });
  // }

  // //获取推荐歌单--------------------------------------------------------------------------------
  // private getEnterSinger(){
  //   this.singerService.getEnterSinger().subscribe(singer => {
  //       this.singers = singer;
  //       console.log("the singers: ")
  //       console.log(this.singers);
  //     });
  // }

  //获取歌单内的多有歌曲
  onPlaySheet(id: number){ 
    console.log("this is the id: " + id);
    // this.sheetServices.getSongSheetDetail(id).subscribe( sheetDetail => {
    //   console.log("sheetDetail: " , sheetDetail);
    // })
    this.sheetServices.playSheet(id).subscribe( sheetDetail => {
      console.log("sheetDetail: " , sheetDetail);
    })
  }
}


