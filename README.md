# Meal Vote

This project contains both a front-end application using the Angular CLI
and a back-end API built with [Express](https://expressjs.com/en/api.html).

![image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOHqt23FM-VuQdLiZkNAAOcG6gzN7nyx19KU6lozDJh7Go7SR)


You will need to serve both simultaneously for http requests for function
properly.


## Serving Angular App

1. In root directory run `npm install` from the terminal.

2. Next run `npm run full-stack`.

(This creates a proxy, which handles CORS issues that result from sending
http requests to localhost.)



## Serving Express API

1. Open a second terminal. Do not close the terminal serving the angular app.

2. Navigate to the root of the server directory.

3. Open the terminal and run `npm install`.

4. Install Nodemon globally from the terminal `npm install -g nodemon`.

5. Run `nodemon index` in the terminal to serve the api.
