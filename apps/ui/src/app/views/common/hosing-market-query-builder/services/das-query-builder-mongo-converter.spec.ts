import { TestBed } from '@angular/core/testing';

import { CommonTestConfig } from '../../../../common/test-services/common-test-config';
import { DasQueryBuilderMongoConvertor } from './das-query-builder-mongo-convertor.service';

describe('DasQueryBuilderConverter', () => {
  let service: DasQueryBuilderMongoConvertor;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports]
    }).compileComponents();

    service = TestBed.inject(DasQueryBuilderMongoConvertor);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
