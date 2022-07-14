import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingRadarComponent } from './reading-radar.component';

describe('ReadingRadarComponent', () => {
  let component: ReadingRadarComponent;
  let fixture: ComponentFixture<ReadingRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingRadarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
