import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymapComponent } from './mymap.component';

describe('MymapComponent', () => {
  let component: MymapComponent;
  let fixture: ComponentFixture<MymapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MymapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
