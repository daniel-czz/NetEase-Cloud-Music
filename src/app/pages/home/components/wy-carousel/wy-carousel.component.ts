import { Component, Input, OnInit, Output, TemplateRef, ViewChild,EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush //变更检测 The OnPush strategy changes Angular's change detection behavior in a similar way as detaching a component does. The change detection doesn't run automatically for every component anymore.
  // https://stackoverflow.com/questions/52979543/should-i-always-use-changedetectionstrategy-onpush
})
export class WyCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('dot', {static: true}) dotRef!: TemplateRef<any>;
  @Input() activeIndex = 0;
  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();


  onChangeSlide( type: 'pre' | 'next'){
    this.changeSlide.emit(type);
  }
}
