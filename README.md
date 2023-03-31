# Dashboard Starter

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=bugs)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)

<a href="https://github.com/j1032w/dashboard-starter" target="_blank"><img src="https://visitor-badge.glitch.me/badge?page_id=j1032w/dashboard-starter"></a>


Dashboard Starter is a dashboard boilerplate project built with Angular, Angular Material CDK and Bootstrap.

You will need to adjust the code to fit your specific needs, but I hope that this project can give you a good starting point.




# Live Demo
https://www.j1032.com/dashboard

[![Demo](documentation/dashboard.png)](https://www.j1032.com/dashboard)


# Setup and Usage
1. Clone the repository
```
git clone https://github.com/j1032w/dashboard-starter.git
```
2. Open your copied repo folder in terminal
```
yarn install

yarn start-dev
```


# Docker
### Pull and run
```
docker pull northamerica-northeast2-docker.pkg.dev/j1032-dashboard-starter/docker/dashboard-starter-ui:develop

docker run -d  -p 4200:80 --restart always --name=dashboard-starter-ui northamerica-northeast2-docker.pkg.dev/j1032-dashboard-starter/docker/dashboard-starter-ui:develop
```

### Build and run
With docker-compose
```
docker compose build

docker compose up
```

or

```
docker image build --progress=plain --tag dashboard-starter-ui:develop 

docker container run -p 4200:80 --rm dashboard-starter-ui:develop
```  







## SonarQube scan result
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)  
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=j1032w_dashboard-starter&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=j1032w_dashboard-starter)



[![sonarqube code quality results](documentation/sonarqube.png)](https://sonarcloud.io/project/overview?id=j1032w_dashboard-starter)






