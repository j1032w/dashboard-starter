import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { CommonTestConfig } from './common/services/common-test-config';


jest.setTimeout(30000);


describe('AppComponent', () => {
  let httpClient:HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, AppModule],
      providers: [...CommonTestConfig.providers]
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });





});
