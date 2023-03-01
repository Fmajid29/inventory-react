# Inventory Management System

This is an inventory management system built with React and Firebase. The application allows users to manage their inventory by adding, editing, and deleting items from the list.

## Features

- Add, edit and delete items from inventory
- Search functionality to filter items
- Firebase authentication for secure login and sign up

## Technologies

- React
- Firebase Authentication
- Firebase Realtime Database

## Installation

1. Clone the repository:

git clone https://github.com/Fmajid29/inventory-react.git

2. Install dependencies:

cd inventory-management-system
npm install

3. Create a Firebase project and enable Authentication and Realtime Database.
4. Create a `.env` file in the root directory and add your Firebase project configuration:

REACT_APP_API_KEY=<your-api-key>
REACT_APP_AUTH_DOMAIN=<your-auth-domain>
REACT_APP_DATABASE_URL=<your-database-url>
REACT_APP_PROJECT_ID=<your-project-id>
REACT_APP_STORAGE_BUCKET=<your-storage-bucket>
REACT_APP_MESSAGING_SENDER_ID=<your-messaging-sender-id>
REACT_APP_APP_ID=<your-app-id>

5. Start the development server:

npm start

## Deployment

To deploy the application, run:
npm run build

This will create a build folder with the compiled code that can be uploaded to your server.

## Demo

A live demo of the application can be found at [https://your-app-url.com](https://your-app-url.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
