# Dashboard Starter
**A starter pack for building dashboards with Angular**\
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)\
[![GitLabPipeline](https://gitlab.com/j1032w/dashboard-starter/badges/main/pipeline.svg)](https://gitlab.com/j1032w/dashboard-starter/-/pipelines)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<a href="https://github.com/j1032w/dashboard-starter" target="_blank"><img src="https://visitor-badge.laobi.icu/badge?page_id=j1032w/dashboard-starter"></a>
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/donate/?hosted_button_id=29ZE3URD5V9Q8)

#### Live Demo: https://www.j1032.com/dashboard
#### Also available: [ReactJS Edition](https://github.com/j1032w/react-dashboard-starter)



[![Demo](documentation/dashboard-cypress.gif)](https://www.j1032.com/dashboard)
[![](https://j1032.com/assets/images/demo.gif)](https://www.j1032.com/dashboard)

[![swagger](documentation/swagger-screenshot.jpg)]()


[![graphql](documentation/graphql-screenshot.png)]()



# Features
- **Technologies**:\
  Built with [Angular 18](https://angular.io), [Nest.js 9](https://nestjs.com/), [Nx 20](https://nx.dev/), [RxJS 7](https://rxjs.dev/), [Angular Material CDK 18](https://material.angular.io/cdk/categories) and [Bootstrap 5](https://getbootstrap.com/)  

- **Modern Development Practices**:\
  Mono-repo structure with [Nx](https://nx.dev/)\
  Containerized application hosted on [Google GCP](https://cloud.google.com/)\
  Angular standalone components and lazy loading\
  HTTP request throttling and caching\  
  Liquid layout and SVG icons.
- **Testing**:\
  Unit testing with [Jest](https://jestjs.io/)\
  End-to-end(E2E) automation testing with [Cypress](https://www.cypress.io/)
- **Code Quality and CI/CD**:\
  Code scanned with [SonarQube](https://sonarcloud.io/project/overview?id=j1032w_dashboard-starter)\
  [Gitlab CI/CD pipeline](https://gitlab.com/j1032w/dashboard-starter/-/pipelines)\
  Integrated [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/)



# Roadmap:
* [ ] Publish the dashboard module as a standalone npm package.
* [ ] Increase unit test coverage.
* [ ] Add integration tess for webapi.




# Getting Started
### Clone repository
```
git clone https://github.com/j1032w/dashboard-starter.git
```

### Install dependencies
```
yarn install
```


### Start with Docker compose

1. Build and run the development server:
```
docker compose -f docker-compose.dev.yml build
docker compose -f docker-compose.dev.yml up
```

2. Restore MongoDB database:
```
mongorestore --uri="mongodb://localhost:27017" --gzip --drop --db das_data database-dump/das_data
```
3. Navigate to the following URLs:
  - **UI**: http://localhost:4200 
  - **API (Swagger)**: http://localhost:3000/api-docs
  - Debug port: 9229



### Start Locally with Node.js
Start development server
```
yarn dev
```

### Testing and Linting
```
yarn ui:test
yarn ui:lint

yarn web:test
yarn web:lint
```


# GitLab CI/CD
https://gitlab.com/j1032w/dashboard-starter/-/pipelines

[![Gitlab](documentation/gitlab.png)](https://gitlab.com/j1032w/dashboard-starter/-/pipelines)






# SonarQube scan result
https://sonarcloud.io/project/overview?id=j1032w_dashboard-starter

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)  
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=bugs)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)




[![sonarqube code quality results](documentation/sonarqube.png)](https://sonarcloud.io/project/overview?id=j1032w_dashboard-starter)



# Support
This project is designed to be simple and customizable.\
Your contributions and donations are greatly appreciated!\
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/donate/?hosted_button_id=29ZE3URD5V9Q8)👈🏻👈🏻👈🏻
