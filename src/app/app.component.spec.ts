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



  it('should create the app',  done => {
    const data = 'LatitudeMax=51.21242&LongitudeMax=-113.85990&LatitudeMin=50.84282&LongitudeMin=-114.31577&CurrentPage=2&Sort=6-D&PropertyTypeGroupID=1&PropertySearchTypeId=0&TransactionTypeId=2&Currency=CAD&RecordsPerPage=12&ApplicationId=1&CultureId=1&Version=7.0';
    const url = 'https://api2.realtor.ca/Listing.svc/PropertySearch_Post';
     httpClient.post(url, data).subscribe((response) => {
      console.log(response);
      done();
    })


    expect(true).toBeTruthy();
  });

});
