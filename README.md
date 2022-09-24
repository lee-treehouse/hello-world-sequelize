# hello-world-sequelize

digital ocean sequelize tutorial from here https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql

## create mySql DB running in docker container

`docker run -p 13306:3306 --name hello-world-sequelize -e MYSQL_ROOT_PASSWORD=newPass -e MYSQL_DATABASE=HWS-db -e MYSQL_USER=hws-dev -e MYSQL_PASSWORD=hws-pass -d mysql:latest`
