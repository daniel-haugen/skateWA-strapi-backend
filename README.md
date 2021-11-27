# Strapi application

Booyah -- Washington skateparks / CMS power


## File Structure

You'll need to create a `.env` file.  When working locally, the only env key's I'm using are for cloudinary. I'm running postgres locally on my computer rn -- that's likely going to change soon so that we can connect to the hosted database on heroku in development mode. 

Biggest thing to pay attention to with the strapi file structure is the `/config` folder. 

First you'll notice that there is a `/env ` folder within the `/config` folder.  This `env` folder is **only used in production**. There is a var config on heroku currently setup, so that when heroku is building our strapi app, it notices that var config and knows to go within the `/env/` folder to reference both the `database.js` and `server.js` files. When you're building the app locally on your machine, it does not do this -- it basically ignores the `/env` folder and references a different set of config files.

I go into further detail below -- but notice that within the `database.js` file the database name and password are determined here. So when creating a database locally, you'll need to follow this convention.

![postgres setup locally](/readMeImages/local-setup.png)


## How this works

1. Pull the repo down. 
2. Install the dependencies `npm i`
3. build the strapi app with `npm run develop`
4. Get error cause postgres server isn't started up yet
5. Start up postgres server -- several ways to do this.
- [here's official docs on starting up postgres from shell](https://www.postgresql.org/docs/9.1/server-start.html)
- that shit was too difficult to understand, and too easy to fuckup -- i downloaded [postgres.app](https://postgresapp.com/) for Mac. Which all it does is abstract the start up -- it really doesn't do that much else.  
- once you've started your postgres sql server locally, you'll need to create a database that strapi app can reference (documented in the screenshot above).
- I believe i used the command `CREATE DATABASE strapi WITH LOGIN PASSWORD 'strapi';` another helpful command once you've started a postgres server locally is `\list` --> this shows the active databases, which by default you'll have like 3-4 -- one titled after your username, another called "template0" and another called "postgres"
6. Now you can build strapi app with `npm run develop` and as long as your database is running locally and there is a 'strapi' database created, it should work. 

