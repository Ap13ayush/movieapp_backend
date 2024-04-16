# Movie Backend Application

## Overview
This project is the backend for a movie streaming application, designed to handle user authentication, movie browsing, and subscription management. Built with Node.js and Express, it offers a robust RESTful API, integrates with MongoDB for data storage, and employs JWT for secure authentication.

## Features
- **User Authentication**: Secure login and registration functionality using JWT.
- **Movie Browsing**: API endpoints to browse and search for movies by various criteria.
- **Subscription Management**: Manage user subscriptions with integrated payment gateway support.
- **Real-Time Communication**: Real-time notifications and chat features using Socket.IO.

## Getting Started

### Prerequisites
- Node.js (v14 or later recommended)
- MongoDB
- Docker & Kubernetes (for deployment)

### Installation
1. Clone the repository:

    git clone https://github.com/Ap13ayush/movie-backend-app.git

2. Navigate to the project directory:
   
    bash  npm install

3. Install dependencies:
   
    npm install

 4. Set up environment variables:
   Create a `.env` file in the root directory and configure the necessary environment variables:

     DB_URI=mongodb://localhost:27017/movieApp


   
### Running the Application
Run the application in development mode:

   npm run dev

For production, start the application with:

   npm start


   
## API Documentation
Refer to the `docs` folder for detailed API documentation. Alternatively, access the live documentation at `http://localhost:3000/api-docs` after starting the application.

## Deployment
This application is container-ready with Docker and can be orchestrated with Kubernetes. See the `Dockerfile` and `kubernetes-config.yaml` for deployment configurations.

## Contributing
Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for more information on how to get started.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Node.js community
- Express.js team
- And all our wonderful contributors!
