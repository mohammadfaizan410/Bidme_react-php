# README

## Description

This project consists of a React frontend and a PHP backend. The backend can be run on XAMPP or WAMP, and the frontend can be run on port 3000. The frontend communicates with the backend to handle requests and display data. 

## Installation

### Backend

1. Clone or download the project to your computer.
2. Install XAMPP or WAMP on your computer if you haven't already.
3. Move the backend folder into the `htdocs` folder of XAMPP or WAMP.
4. Start XAMPP or WAMP and make sure Apache and MySQL are running.

### Frontend

1. Clone or download the project to your computer.
2. Open your terminal and navigate to the project folder.
3. Run `npm install` to install the required packages.

## Usage

To use this project, you will need to have the PHP backend running on your computer. You can start the frontend by running `npm start` in your terminal. This will start the application on `http://localhost:3000`. Once the application is running, you can use it to interact with the backend and display data. To make requests from the frontend to the backend, the access control in `header('Access-Control-Allow-Origin: http://localhost:3000')` needs to be modified to allow the IP of the frontend.

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a clear commit message.
4. Push your changes to your forked repository.
5. Create a pull request to merge your changes into the main repository.

## Database Initialization
Log in to your phpMyAdmin account and select the database you want to import the file into.

Click on the "Import" tab located at the top of the screen.

Click on the "Choose File" button and select the bidme_db.sql file from bidme_db


Wait for the import to complete. This may take some time depending on the size of the file and the performance of your server.

Once the import is complete, you will receive a notification indicating that the process was successful.

## Registration Key
b8c3ef96f10058960113e5d151d057b6ce9eb035a81d896e218de00dab6933f9

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


