Tutorial URL
https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql

My source code
https://github.com/lee-treehouse/hello-world-sequelize

My notes
docker run -p 13306:3306 --name hello-world-sequelize -e MYSQL_ROOT_PASSWORD=newPass -e MYSQL_DATABASE=HWS-db -e MYSQL_USER=hws-dev -e MYSQL_PASSWORD=hws-pass -d mysql:latest

I can run mysql cli inside the docker container like this

docker exec -it hello-world-sequelize mysql -u hfs-dev -p

(How I initially created the container before using docker run was with this https://hevodata.com/learn/docker-mysql/)

Ok I’m up to step 4, multiple associations, so I’m going to need to create a new db
https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql

student_db

student-db-dev
Student-db-pass

This worked -
Create user ‘student-db-dev’ identified by ‘student-db-pass’
mysql> use student_db
mysql> GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on _._ to 'student-db-dev' WITH GRANT OPTION;

Also array of custom keys
https://stackoverflow.com/questions/22378950/create-an-array-of-objects-with-custom-keys

Sample app to use for structure
https://github.com/lucaschen/microservices-demo/blob/master/users-service/src/db/models.js

YouTube video
https://www.youtube.com/watch?v=6Yfm5gHQjaQ&t=39s
