import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
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
})
export class SvgObjectComponent implements AfterViewInit {
  @HostBinding('class') class = 'c-svg-object';
  //@ViewChild('grid') grid!: ElementRef;
  @ViewChildren('circle', {read: ElementRef}) circle!: QueryList<ElementRef>;
  @ViewChildren('circle2', {read: ElementRef}) circle2!: QueryList<ElementRef>;
  @ViewChildren('circle3', {read: ElementRef}) circle3!: QueryList<ElementRef>;
  constructor(private element: ElementRef, private render: Renderer2) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // randomize(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  ngAfterViewInit(): void {
    const circles = this.circle.map((cir) => cir.nativeElement);
    const circles2 = this.circle2.map((cir) => cir.nativeElement);
    const circles3 = this.circle3.map((cir) => cir.nativeElement);
    const colors = {
      primary: '#FDCE56',
      secondary: '#373596',
      accent1: '#1AFFD6',
      accent2: '#FF429D',
    };

    const staggering = gsap.timeline({
      defaults: {
        transformOrigin: '50% 50%',
        ease: 'back',
        duration: 2,
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        stagger: {
          grid: 'auto',
          amount: 2.25,
          from: 0,
        },
      },
    });

    staggering
      .to(
        this.element.nativeElement,
        {
          '--progress-end': '100%',
          ease: 'power2.inOut',
        },
        0
      )
      .fromTo(
        circles,
        {
          scale: 0.125,
          fill: colors.secondary,
        },
        {
          scale: 0.45,
          fill: colors.primary,
        },
        0
      )
      .fromTo(
        circles2,
        {
          x: 0,
          scale: 0.125,
          fill: colors.secondary,
        },
        {
          x: 1,
          scale: 0.36,
          fill: colors.accent1,
          ease: 'elastic',
        },
        0.125
      )
      .fromTo(
        circles3,
        {
          x: 0,
          scale: 0.125,
          fill: colors.secondary,
        },
        {
          x: -1,
          scale: 0.36,
          fill: colors.accent2,
          ease: 'elastic',
        },
        0.145
      );
  }
}
