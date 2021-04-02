import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'c-art-frame',
  templateUrl: './art-frame.component.html',
  styleUrls: ['./art-frame.component.scss'],
})
export class ArtFrameComponent implements OnInit {
  @HostBinding('class') class = 'c-art-frame';
  constructor() {}

  ngOnInit(): void {}
}
