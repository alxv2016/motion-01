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
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {}

  randomize(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngAfterViewInit(): void {
    const circles = this.circle.map((cir) => cir.nativeElement);

    const staggering = gsap.timeline({
      defaults: {
        transformOrigin: '50% 50%',
        ease: 'back',
        duration: 3,
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

    staggering.fromTo(
      circles,
      {
        scale: 0.125,
        fill: '#ff3c78',
        strokeDasharray: '60',
        strokeDashoffset: '360',
      },
      {
        scale: 0.98,
        fill: '#64f5b9',
        strokeWidth: 3,
        strokeDashoffset: '0',
        rotate: 360,
        stroke: '#ff3c78',
      }
    );
  }
}
