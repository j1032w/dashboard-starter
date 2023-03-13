import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasSidebarComponent } from './das-sidebar.component';

describe('AdmSidebarComponent', () => {
  let component: DasSidebarComponent;
  let fixture: ComponentFixture<DasSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
