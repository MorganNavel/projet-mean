import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationContainerComponent } from './location-container.component';

describe('LocationContainerComponent', () => {
  let component: LocationContainerComponent;
  let fixture: ComponentFixture<LocationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
