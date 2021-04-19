import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibInfrastructureSharedComponent } from './lib-infrastructure-shared.component';

describe('LibInfrastructureSharedComponent', () => {
  let component: LibInfrastructureSharedComponent;
  let fixture: ComponentFixture<LibInfrastructureSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibInfrastructureSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibInfrastructureSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
