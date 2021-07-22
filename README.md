## Database setup
- Install PostgreSQL
- On a terminal, type:
```sh
    psql -u postgres
```
- It should appear a prompt line: 
```sh 
    postgres=#
```
- Create a database with:
```sh 
    CREATE DATABASE database_name;
```
- In this case, we'll call it **"pern"**
- Enter into **pern** with 
```sh 
    \c pern
```
- Create a table where we're going to put our "To Do's" with: 
``` sh 
    CREATE TABLE todo(
        todo_id SERIAL PRIMARY KEY, 
        description VARCHAR(255)
    );
```
- Done. The database is basic but will do the job. Don't shut down the terminal when the project is running.

## Run the project itself
- Create another terminal, go to the **backend** folder, run ```npm install``` and then run ```npm run start```. This will get the server running on **localhost:5000**.
- Finally, create a final terminal, go to the **frontend** folder,  run ```npm install```, and ```npm run dev```. Go to **localhost:3000** in your browser to see the project.
- Enjoy :D