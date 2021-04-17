import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  NgZone,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Component({
  selector: 'c-svg-object',
  templateUrl: './svg-object.component.html',
  styleUrls: ['./svg-object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgObjectComponent implements AfterViewInit {
  @HostBinding('class') class = 'c-svg-object';
  @ViewChild('grid') grid!: ElementRef;
  @ViewChildren('circle', {read: ElementRef}) circle!: QueryList<ElementRef>;
  @ViewChildren('circle2', {read: ElementRef}) circle2!: QueryList<ElementRef>;
  @ViewChildren('circle3', {read: ElementRef}) circle3!: QueryList<ElementRef>;
  constructor(private element: ElementRef, private render: Renderer2, private ngZone: NgZone) {
    gsap.registerPlugin(ScrollTrigger);
  }

  private initGsap(): void {
    const circles = this.circle.map((cir) => cir.nativeElement);
    const circles2 = this.circle2.map((cir) => cir.nativeElement);
    const circles3 = this.circle3.map((cir) => cir.nativeElement);
    const colors = {
      primary: '#FFFFFF',
      secondary: '#373596',
      accent1: '#1AFFD6',
      accent2: '#FF429D',
    };

    const staggering = gsap.timeline({
      defaults: {
        transformOrigin: '50% 50%',
        ease: 'elastic',
        duration: 1.75,
        repeat: -1,
        yoyo: true,
        //yoyoEase: true,
        stagger: {
          grid: 'auto',
          amount: 1.75,
          from: 'center',
        },
      },
    });

    staggering
      .to(this.grid.nativeElement, {
        scale: 0.85,
      })
      .to(
        circles,
        {
          scale: 0.25,
          y: -8,
          x: 8,
        },
        0
      )
      .to(
        circles2,
        {
          y: -8,
          x: 8,
          scale: 0.125,
          ease: 'elastic',
        },
        0.125
      )
      .to(
        circles3,
        {
          y: -8,
          x: 8,
          scale: 0.125,
          ease: 'elastic',
        },
        0.145
      );
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.initGsap();
    });
  }
}
