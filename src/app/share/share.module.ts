import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { WyUiModule } from './wy-ui/wy-ui.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzInputModule,
    NzIconModule,
    NzCarouselModule,
    WyUiModule
  ],
  exports: [ // 其他模块引入 share module，就相当于引入这些模块。
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzInputModule,
    NzIconModule,
    NzCarouselModule,
    WyUiModule,
  ]
})
export class ShareModule { }
