### Live Link: https://book-listing-server.vercel.app/

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/auth/signin (POST)
- api/v1/users (GET)
- api/v1/users/65a5feff-9a7a-48e0-aaf9-c6624bee9a05 (Single GET)
- api/v1/users/65a5feff-9a7a-48e0-aaf9-c6624bee9a05 (PATCH)
- api/v1/users/ae8e8fcb-4390-4ab2-bdf7-ddcfc98ac0bb (DELETE)
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/79524aef-e0a3-4bb3-a90a-bf15a9045acc (Single GET)
- api/v1/categories/79524aef-e0a3-4bb3-a90a-bf15a9045acc (PATCH)
- api/v1/categories/b626815c-e526-4251-83d6-434bdfc94943 (DELETE)

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/79524aef-e0a3-4bb3-a90a-bf15a9045acc/category (GET)
- api/v1/books/e11d7a02-a38a-47c8-9cf8-91d06f4b0e50 (GET)
- api/v1/books/e11d7a02-a38a-47c8-9cf8-91d06f4b0e50 (PATCH)
- api/v1/books/abd94548-ed9e-4af4-aefe-b3a9c0f947bc (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/29ec53bd-09c7-4df3-a4c2-7c2c116b17fc (GET)
