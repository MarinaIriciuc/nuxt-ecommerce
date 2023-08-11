# E-Commerce Website with Nuxt.js, Bootstrap, and Authentication

This is an e-commerce website built using Nuxt.js and Bootstrap. The project allows users to browse and add products to
their shopping cart. It also includes authentication options through Google and GitHub. The design follows a minimalist
approach for a clean and intuitive user experience.

![Website Screenshot](https://i.ibb.co/dBKTnw8/Captura-de-ecran-din-2023-08-11-la-15-12-44.png)
![Website Screenshot](https://i.ibb.co/r3c0g7f/Captura-de-ecran-din-2023-08-11-la-15-06-18.png)
![Website Screenshot](https://i.ibb.co/rxgjR3f/Captura-de-ecran-din-2023-08-11-la-15-15-14.png)
![Website Screenshot](https://i.ibb.co/6HNmW4V/Captura-de-ecran-din-2023-08-11-la-15-22-33.png)

## Features

- Browse and view products from the product catalog.
- Add products to the shopping cart.
- Authenticate using Google or GitHub accounts.
- Minimalist design for a modern and user-friendly interface.
- Administrator Features:
    - Add, display, and delete products from the database.

## Technologies Used

- Nuxt.js (https://nuxtjs.org) : A Vue.js framework for building server-side rendered applications.
- Bootstrap (https://getbootstrap.com) : A popular CSS framework for building responsive and sleek designs.
- MySQL (https://www.mysql.com) : A relational database management system for storing product data.
- OAuth: For authentication through Google and GitHub accounts.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) and npm: Make sure you have Node.js and npm (Node Package Manager) installed on your
  system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/e-commerce-nuxt-bootstrap-auth.git
   cd e-commerce-nuxt-bootstrap-auth
   
2. Install the dependencies:
    ```bash
    npm install
   
3. Set up the required environment variables in .env.example file in the root directory:
    ```bash
    AUTH_SECRET=your-auth-secret
   DATABASE_URL=your-database-url
   DATABASE_RELATION_MODE=your-database-relation-mode
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   Replace your-auth-secret, your-database-url, your-database-relation-mode, your-github-client-id, your-github-client-secret, your-google-client-id, and your-google-client-secret with the actual values. These values are usually provided by the authentication providers and your database configuration.

4. Run the development server:
    ```bash
   npm run dev
5. Open your browser and go to http://localhost:3000 to access the website.

### Usage

Once you have completed the installation steps, you can start using the e-commerce website:

1. Open your browser and navigate to `http://localhost:3000`.

2. Browse the product catalog and click on products to view more details.

3. To add products to your shopping cart, simply click the "Add to Cart" button on the product page.

4. If you want to authenticate using Google or GitHub, locate the corresponding authentication buttons and follow the
   prompts.

5. Enjoy exploring the e-commerce website and testing its features!

## Contributing

Contributions are welcome! If you find any issues, discover bugs, or have suggestions for improvements, feel free to
open a GitHub issue or submit a pull request. Make sure to follow the [contributing guidelines](CONTRIBUTING.md) when
submitting your contributions.

**[Iriciuc Marina](https://github.com/MarinaIriciuc)**