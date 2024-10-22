import { Injectable } from '@angular/core';
import {
  QueryBuilderConfig,
  Rule,
  RuleSet
} from 'ngx-angular-query-builder';


@Injectable({ providedIn: 'root' })
export class DasQueryBuilderMongoConvertor {
  config: QueryBuilderConfig = { fields: {} };

  private readonly conditions = new Map<string, string>([
    ['and', '$and'],
    ['or', '$or']
  ]);

  private readonly operators = new Map<string, string>([
    ['=', '$eq'],
    ['!=', '$ne'],
    ['<', '$lt'],
    ['<=', '$lte'],
    ['>', '$gt'],
    ['>=', 'gte'],
    ['in', '$in'],
    ['not in', '$nin'],
    ['contains', '$regex']
  ]);

  private getSchemaType = (field: string) => {
    return this.config.fields[field].type;
  };

  private mapRule = (rule: Rule) => {
    const field = rule.field;
    let value = rule.value;

    if (!value) {
      value = null;
    }

    const schemaType = this.getSchemaType(rule.field);
    if (schemaType === 'Date' && value) {
      value = new Date(value);
    }

    // Set operator
    const operator = this.operators.get(rule.operator ?? '=') ?? '$eq';

    // Create a MongoDB query
    let mongoDBQuery;

    // Check if operator is $regex
    if (operator === '$regex') {
      // Set case-insensitive option
      mongoDBQuery = {
        [field]: {
          [operator]: value,
          $options: 'i'
        }
      };
    } else {
      mongoDBQuery = { [field]: { [operator]: value } };
    }

    return mongoDBQuery;
  };

  mapRuleSet = (ruleSet: RuleSet | Rule): any => {
    let rules = [];
    if (!('rules' in ruleSet) || ruleSet.rules.length < 1) {
      return;
    } else {
      rules = ruleSet.rules;
    }

    let condition = '$and';
    if ('condition' in ruleSet) {
      condition = this.conditions.get(ruleSet.condition) ?? '$and';
    }

    // Iterate Rule Set conditions recursively to build database query
    return {
      [condition]: rules.map(rule => ('operator' in rule && rule.operator ? this.mapRule(rule) : this.mapRuleSet(rule)))
    };
  };
}
