# Tyelp

This is a clone of Yelp. <br> 
Tyelp (the 'T' is silent) is the place to go to for looking for businesses/services near you. 

# Index
| [Features List](https://github.com/ctsang727/solo-project/wiki/Features) | [Database Schema](https://github.com/ctsang727/solo-project/wiki/Database-schema) 

# Technologies Used <br>
<div>
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/>
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/>
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/>
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/>
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/>
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/>
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>
</div>

# Getting Started
1. Clone this repo.

    * ```git clone https://github.com/ctsang727/solo-project.git```
<br> or
    * ```git clone git@github.com:ctsang727/solo-project.git```


2. Install dependencies from the root directory.

    * ```npm install```

3. In PSQL, create a USER with CREATEDB and PASSWORD.

    * ```CREATE USER <name> WITH CREATEDB PASSWORD <'password'>```

4. In the backend directory create a .env file. Use the .envexample file as a template. Make sure all applicable information matches with the information provided in step 3 (i.e. DB_USERNAME should be the same as the PSQL user created in step 3).

5. For the JWT_SECRET, enter a secured combination of characters and PORT:5000 is recommended, but any port will do just fine. 

6. In the frontend directory, add the following proxy to your package.json file. The '5000' can be changed as needed to match your PORT configuration from the previous step. 

    * ```"proxy": "http://localhost:5000"```

7. In your terminal, create Database, Migrate, and Seed models.

    * ```npx dotenv sequelize db:create```
    * ```npx dotenv sequelize db:migrate```
    * ```npx dotenv sequelize db:seed:all```

8. In the backend directory, start the services using the following command:

    * ```npm start```

9. In the frontend directory, start the services using the following command. This should open the project in your default browser. If not, navigate to http://localhost:3000.

    * ```npm start```

10. You can use the Demo user or create an account to begin using **Tyelp**.

# Features
All users can view all businesses as well as the ratings for a business and reviews from other users. <br>
Logged in users can add their own business to Tyelp and edit or delete their business if so desired. <br>
Logged in users can also leave ratings and reviews for other businesses. They may also delete their own reviews. <br>

