README
Description
This project is a PHP backend that can be run on XAMPP or WAMP. The backend is designed to allow requests from localhost with IP 3000. If you want to send requests from another address, you will need to modify the access control in header('Access-Control-Allow-Origin: http://localhost:3000') to allow your IP.

Installation
Clone or download the project to your computer.
Install XAMPP or WAMP on your computer if you haven't already.
Move the project folder into the htdocs folder of XAMPP or WAMP.
Start XAMPP or WAMP and make sure Apache and MySQL are running.
Open your web browser and navigate to http://localhost/your-project-folder.
Usage
Once you have installed the project, you can use it to handle backend requests for your application. To make requests from your frontend, you will need to make sure that your frontend is running on http://localhost:3000 or modify the access control in header('Access-Control-Allow-Origin: http://localhost:3000') to allow your frontend's IP.

Contributing
Contributions to this project are welcome. If you would like to contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with a clear commit message.
Push your changes to your forked repository.
Create a pull request to merge your changes into the main repository.
License
This project is licensed under the MIT License.