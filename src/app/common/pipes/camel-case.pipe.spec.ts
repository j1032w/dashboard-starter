import {TestBed} from '@angular/core/testing';

import {DasCommonModule} from '../das-common.module';
import {CommonTestConfig} from '../test-services/common-test-config';
import {CamelCasePipe} from './camel-case.pipe';


describe('CamelCasePipe', () => {
  let pipe: CamelCasePipe;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasCommonModule, ...CommonTestConfig.imports],
      providers: [...CommonTestConfig.providers, CamelCasePipe]
    })
      .compileComponents();

    pipe = TestBed.inject(CamelCasePipe);

  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });


  it('should convert string to camel case', () => {
    const result='testCase';
    expect(pipe.transform('testCase')).toEqual(result);
    expect(pipe.transform('test case')).toEqual(result);
    expect(pipe.transform('TestCase')).toEqual(result);
    expect(pipe.transform('_Test_Case')).toEqual(result);
  });

});
