import { Component, Input } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';

@Component({
  selector: 'das-ui-query-builder',
  templateUrl: './ui-query-builder.component.html',
  styleUrls: ['./ui-query-builder.component.scss']
})
export class UiQueryBuilderComponent {


  query = {
    condition: 'and',
    rules: [
      { field: 'age', operator: '<=', value: 'Bob' },
      { field: 'gender', operator: '>=', value: 'm' }
    ]
  };

  config: QueryBuilderConfig = {
    fields: {
      age: { name: 'Age', type: 'number' },
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          { name: 'Male', value: 'm' },
          { name: 'Female', value: 'f' }
        ]
      },
      name: { name: 'Name', type: 'string' },
      notes: { name: 'Notes', type: 'textarea', operators: ['=', '!='] },
      educated: { name: 'College Degree?', type: 'boolean' },
      birthday: {
        name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
        defaultValue: (() => new Date())
      },
      school: { name: 'School', type: 'string', nullable: true },
      occupation: {
        name: 'Occupation',
        type: 'category',
        options: [
          { name: 'Student', value: 'student' },
          { name: 'Teacher', value: 'teacher' },
          { name: 'Unemployed', value: 'unemployed' },
          { name: 'Scientist', value: 'scientist' }
        ]
      }
    }
  };

}
