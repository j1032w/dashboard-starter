# Dashboard Starter
A dashboard boilerplate project

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=bugs)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)

<a href="https://github.com/j1032w/dashboard-starter" target="_blank"><img src="https://visitor-badge.laobi.icu/badge?page_id=j1032w/dashboard-starter"></a>




You will need to adjust the code to fit your specific needs, and I hope that this project can give you a good starting point.

What I've got here
- Built on Angular, Typescript, SCSS, [Angular Material CDK](https://material.angular.io/cdk/categories) and [Bootstrap](https://getbootstrap.com/)    
- Ahead-of-time ([AOT](https://angular.io/guide/aot-compiler)) compile
- SVG Icons
- Unit testing with [Jest](https://jestjs.io/)
- Dockerized application
- Source code scanned with [SonarQube](https://sonarcloud.io/project/overview?id=j1032w_dashboard-starter)

# Live Demo
https://www.j1032.com/dashboard

[![Demo](documentation/dashboard.png)](https://www.j1032.com/dashboard)


# Quick start
1. Clone repository
```
git clone https://github.com/j1032w/dashboard-starter.git
```
2. Running development server
```
yarn install
yarn start-dev
```
3. Navigate to [http://localhost:4200/](http://localhost:4200/)

### Running unit tests
```
yarn test
```

# Docker
### Deployment
Load container image form Google cloud Artifact registry 
```
docker run -d --pull=always -p 4200:80 --name=dashboard-starter-ui  northamerica-northeast2-docker.pkg.dev/j1032-dashboard-starter/docker/dashboard-starter-ui:develop
```

### Build container locally
With docker-compose
```
docker compose build
docker compose up
```

or with Docker standalone

```
docker image build --progress=plain --tag dashboard-starter-ui:develop 

docker container run -d -p 4200:80 --rm dashboard-starter-ui:develop
```  







## SonarQube scan result
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)  
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)



[![sonarqube code quality results](documentation/sonarqube.png)](https://sonarcloud.io/project/overview?id=j1032w_dashboard-starter)






