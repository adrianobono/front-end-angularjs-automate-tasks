# front-end-angularjs-automate-tasks using Java and Node.js

# 1 - Java Application

Requirements: JDK 8.0 and Maven correctly installed

Open a command terminal and access the root directory of this project.

First: Type the command below and press enter

    mvn clean package

Second: Type the command below and press enter

    mvn spring-boot:run

The application will run on web browser at:

    http://localhost:8090/

Open your web browser to access the local above mentioned and using three screen resolution
that show the aplication:

- WVGA  (set web browser width to 768px)
- HD   (set web browser width to 1280px)
- Full HD (set web browser width to 1920px)

*Using another resolutions a warn will showed.

# 2 - Node.js Application

Requirements: Node.js, Bower and Protractor correctly installed

Open a command terminal and access the root directory /web of this project.

First: Type the command below and press enter

     bower install

Second: Type the command below and press enter

    npm install

Third: Type the command below and press enter

    npm start
    

The application will run on web browser at:

    http://localhost:8090/

Open your web browser to access the local above mentioned and using three screen resolution
that show the aplication:

-WVGA  (set web browser width to 768px)
-HD   (set web browser width to 1280px)
-Full HD (set web browser width to 1920px)

*Using another resolutions a warn message will showed.

# Minify works automatically when Node.js server starts 
File eported at: ./web/src/js/min/app.js

# Test

Open a second command terminal.

Type the command below and press enter

    webdriver-manager start

Open a third command terminal and access the root directory /web/test/end-to-end of this project.

Type the command below and press enter

    protractor config.js
    

> A simple test will open a resized web browser
> to 768px (width) with the application running
> and the test will check the page title first 
> and then simulates a click on the first user
> of list to show more information about user.
>Finally, the test will wait for 3 seconds and close the web browser.