# Dashboard Starter

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=bugs)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)

<a href="https://github.com/j1032w/dashboard-starter" target="_blank"><img src="https://visitor-badge.laobi.icu/badge?page_id=j1032w/dashboard-starter"></a>


Dashboard Starter is a dashboard boilerplate project built with Angular v15, Angular Material CDK v15 and Bootstrap v5.

You will need to adjust the code to fit your specific needs, and I hope that this project can give you a good starting point.




# Live Demo
https://www.j1032.com/dashboard

[![Demo](documentation/dashboard.png)](https://www.j1032.com/dashboard)


# Setup and Usage
### Clone repository
```
git clone https://github.com/j1032w/dashboard-starter.git
```
### Running development server
```
yarn install

yarn start-dev
```
Navigate to `http://localhost:4200/`

### Running unit tests
```
yarn test
```

# Docker
### Deployment
```
docker container rm -f dashboard-starter-ui \
&& docker run -d --pull=always -p 4200:80 --name=dashboard-starter-ui  northamerica-northeast2-docker.pkg.dev/j1032-dashboard-starter/docker/dashboard-starter-ui:develop
```

### Build and run
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






