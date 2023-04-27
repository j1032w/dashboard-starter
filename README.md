# Dashboard Starter
**A dashboard boilerplate project.**\
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)\
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<a href="https://github.com/j1032w/dashboard-starter" target="_blank"><img src="https://visitor-badge.laobi.icu/badge?page_id=j1032w/dashboard-starter"></a>
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/donate/?hosted_button_id=29ZE3URD5V9Q8)


# Demo
https://www.j1032.com/dashboard \
&nbsp;

[![Demo](documentation/dashboard-cypress.gif)](https://www.j1032.com/dashboard)




# What I have got here
- Built with [Angular 15](https://angular.io), [Typescript 4](https://www.typescriptlang.org/), [SCSS](https://sass-lang.com/), [RxJS 7](https://rxjs.dev/), [Angular Material CDK 15](https://material.angular.io/cdk/categories) and [Bootstrap 5](https://getbootstrap.com/)
- Ahead-of-time ([AOT](https://angular.io/guide/aot-compiler)) compile
- Module lazy loading, HTTP reqeust cache, Responsive liquid layout, SVG Icons
- Unit testing with [Jest](https://jestjs.io/)
- E2E automation testing with [Cypress](https://www.cypress.io/)
- [Dockerized application](https://www.docker.com/) hosted on [Google Cloud](https://cloud.google.com/)
- Source code scanned with [SonarQube](https://sonarcloud.io/project/overview?id=j1032w_dashboard-starter)
- MIT License


It's designed to be easy to understand and use. Feel free to customize it to fit your needs.\
Every donation is appreciated and will go towards the development of this project. Thank you for your support!
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/donate/?hosted_button_id=29ZE3URD5V9Q8)👈🏻👈🏻👈🏻



# Quick start
1. Clone repository
```
git clone https://github.com/j1032w/dashboard-starter.git
```
2. Running development server
```
yarn install
yarn start:dev
```
3. Navigate to [http://localhost:4200/](http://localhost:4200/)

### Running unit tests
```
yarn test
```

### Running e2e tests
```
yarn cypr
```


# Docker
### Deployment
1. Running container, fetch image form Google cloud Artifact Registry.
```
docker run -d --pull=always -p 4201:80 --name=das-ui  northamerica-northeast2-docker.pkg.dev/j1032-dashboard-starter/docker/das-ui:develop
```
2. Navigate to http://localhost:4201


### Build container with docker-compose
1. Run followed command in project directory.
```
docker compose build
docker compose up -d
```
2. Navigate to http://localhost:4201

### Build container with Docker cli

```
docker image build --progress=plain --tag das-ui:develop 

docker container run -d -p 4201:80 --rm das-ui:develop
```  







## SonarQube scan result
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)  
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=bugs)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)




[![sonarqube code quality results](documentation/sonarqube.png)](https://sonarcloud.io/project/overview?id=j1032w_dashboard-starter)






