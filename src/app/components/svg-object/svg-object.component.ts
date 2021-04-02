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

  ngAfterViewInit(): void {
    const circles = this.circle.map((cir) => cir.nativeElement);
    const staggering = gsap.timeline({
      defaults: {
        // repeat: -1,
        // yoyo: true,
        // yoyoEase: true,
        duration: 1,
        transformOrigin: '50%',
        ease: 'back',
        stagger: {
          repeat: -1,
          yoyo: true,
          yoyoEase: true,
          grid: 'auto',
          amount: 1.75,
          from: 'center',
          //ease: 'power2.in',
        },
      },
    });

    staggering.fromTo(
      circles,
      {
        scale: 0.125,
      },
      {
        scale: 0.9,
      }
    );
  }
}
