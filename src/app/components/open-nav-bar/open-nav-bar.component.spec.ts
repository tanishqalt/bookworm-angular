import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenNavBarComponent } from './open-nav-bar.component';

describe('OpenNavBarComponent', () => {
  let component: OpenNavBarComponent;
  let fixture: ComponentFixture<OpenNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
