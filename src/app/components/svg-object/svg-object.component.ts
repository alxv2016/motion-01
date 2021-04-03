import {AfterViewInit, Component, ElementRef, HostBinding, OnInit, QueryList, ViewChildren} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Component({
  selector: 'c-svg-object',
  templateUrl: './svg-object.component.html',
  styleUrls: ['./svg-object.component.scss'],
})
export class SvgObjectComponent implements OnInit, AfterViewInit {
  @HostBinding('class') class = 'c-svg-object';
  @ViewChildren('circle', {read: ElementRef}) circle!: QueryList<ElementRef>;
  @ViewChildren('circle2', {read: ElementRef}) circle2!: QueryList<ElementRef>;
  @ViewChildren('circle3', {read: ElementRef}) circle3!: QueryList<ElementRef>;
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {}

  randomize(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngAfterViewInit(): void {
    const circles = this.circle.map((cir) => cir.nativeElement);
    const circles2 = this.circle2.map((cir) => cir.nativeElement);
    const circles3 = this.circle3.map((cir) => cir.nativeElement);

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
      .fromTo(
        circles,
        {
          scale: 0.125,
          fill: 'black',
        },
        {
          scale: 0.45,
          fill: 'black',
        }
      )
      .fromTo(
        circles2,
        {
          x: 0,
          scale: 0.125,
          fill: 'black',
        },
        {
          x: 1,
          scale: 0.36,
          fill: 'cyan',
          ease: 'elastic',
        },
        0.125
      )
      .fromTo(
        circles3,
        {
          y: 0,
          scale: 0.125,
          fill: 'black',
        },
        {
          y: 1,
          scale: 0.36,
          fill: 'magenta',
          ease: 'elastic',
        },
        0.145
      );
  }
}
