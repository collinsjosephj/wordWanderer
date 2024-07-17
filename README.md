# wordWanderer  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)




<img width="1918" alt="Screenshot 2024-07-17 at 02 46 40" src="https://github.com/user-attachments/assets/5cf70eea-204e-4187-9fb2-e04026f2bbc9">

## Overview

This project is a refactor of a Google Books API search engine. Originally built with a RESTful API, this application has been refactored to use a GraphQL API built with Apollo Server. The application is developed using the MERN stack: MongoDB for the database, Express.js and Node.js for the server, and React for the front end. Users can search for books, save them to their personal list, and manage their saved books. I enjoyed working on this one, I hope you enjoy using it!

## Features

- **Book Search:** Search for books using the Google Books API.
- **User Authentication:** Sign up and log in to save books.
- **Save Books:** Save books to your personal list.
- **Manage Saved Books:** View and remove books from your saved list.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation

To install this application locally:

1. Clone the repository

```
git clone https://github.com/collinsjosephj/wordWanderer.git
```

2. Navigate into the project directory file
   
```
cd wordWanderer
```

3. Install dependencies, both in the server side and the client side of the application, and then navigate back to the root level for deployment.

```
npm install
cd client
npm install
cd ...
```

4. You will need to create an .env file, at the root or server directory, and add your MONGODB_URI:

```
In the `.env` file: MONGODB_URI=your_mongodb_uri
```

5. Now you can start the development server:

```
npm run render-build
npm run develop
```

## Usage

- Now that you have set up the application, navigate to `http://localhost:3000` in your browser of choice.
- Sign in with username, email, and password credentials in order to save books to your personalized list.
- Or, you can just simply browse at your will, enjoy!

## Deployment

This application is deployed live with Render, and uses MongoDB Atlas for its database.
Here is the link to view the live version: [wordWanderer](https://wordwanderer.onrender.com/)

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request. You can also reach out to me via the links provided below. I would absolutely **love** to collaborate on any and all projects, big and small.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/collinsjosephj/wordWanderer/blob/main/LICENSE) file for details. 

## Questions

If you have any questions about the repo, open an issue or contact me directly via email [here](mailto:collinsjosephj@gmail.com). 

You can find more of my work on [GitHub](https://github.com/collinsjosephj@gmail.com).


