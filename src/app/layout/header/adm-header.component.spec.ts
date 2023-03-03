import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmHeaderComponent } from './adm-header.component';

describe('AdmHeaderComponent', () => {
  let component: AdmHeaderComponent;
  let fixture: ComponentFixture<AdmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
