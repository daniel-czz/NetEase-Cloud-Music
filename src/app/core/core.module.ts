import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from '../pages/pages.module'
import { ShareModule } from '../share/share.module';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
import { ServicesModule } from '../services/services.module';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,
  ],
  exports: [
    ShareModule,
    AppRoutingModule,
    
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],

})
export class CoreModule { //希望core module只能被
  constructor(@SkipSelf() @Optional() parentModule: CoreModule){
    if(parentModule){
      throw new Error('core module 只能被appModule引入');
    }
  }
 }

