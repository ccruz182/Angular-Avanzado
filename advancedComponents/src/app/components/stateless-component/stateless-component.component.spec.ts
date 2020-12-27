import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatelessComponentComponent } from './stateless-component.component';

describe('StatelessComponentComponent', () => {
  let component: StatelessComponentComponent;
  let fixture: ComponentFixture<StatelessComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatelessComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatelessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
