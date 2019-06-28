import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamDecoratorComponent } from './ice-cream-decorator.component';

describe('IceCreamDecoratorComponent', () => {
  let component: IceCreamDecoratorComponent;
  let fixture: ComponentFixture<IceCreamDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCreamDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
