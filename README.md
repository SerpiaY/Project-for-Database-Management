# Project-for-Database-Management
A class project for the class Principal of Database Management
Important notice :
Webapp will be deployed using Tomcat Server, on localhost : http://localhost:8080/

Execute these commands on CMD Prompt on Windows:

To find current port listener : netstat -ano | findstr 8080

To terminate current port listener : taskkill /F /PID *pid*

The PID exists when executing first command :  TCP    0.0.0.0:8080           0.0.0.0:0              LISTENING       13896
In thiscase, 13896 is the pid.

Apache Tomcat version 10.1 for website
Spring Framework for Java
HTML, CSS and JS for website
PostgreSQL for database

API Program are moved to a seperate reposistory, Spring Connect
