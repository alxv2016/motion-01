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
    let randomIndex = 40;
    const staggering = gsap.timeline({
      defaults: {
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        transformOrigin: '50% 50%',
        ease: 'back',
        duration: 1,
        stagger: {
          //repeat: -1,
          grid: 'auto',
          amount: 0.75,
          from: 'center',
        },
      },
    });
    console.log(randomIndex);

    staggering.fromTo(
      circles,
      {
        scale: 0.125,
        fill: '#ff3c78',
      },
      {
        scale: 0.75,
        fill: '#ff3c78',
      }
    );
  }
}
