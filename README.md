# Blog-management

User Management
| Methods | Urls                | Actions                               |
| ------- | ------------------- | ------------------------------------- |
| POST    | /api/auth/sign-up   | Sign up a new user account.           |
| POST    | /api/auth/sign-in:  | Sign in with a username and password. |
| GET     | /api/auth/{userId}: | Get specific user details.            |


Blog Post Management
| Methods | Urls                 | Actions                      |
| ------- | -------------------- | ---------------------------- |
| POST    | /api/posts:          | Create a new blog post.      |
| GET     | /api/posts:          | Get all blog posts.          |
| GET     | /api/posts/{postId}: | Get a specific blog post.    |
| PATCH   | /api/posts/{postId}: | Update a specific blog post. |
| DELETE  | /api/posts/{postId}: | Delete a specific blog post. |

Running the Project
To start using this project, follow these steps:

Clone this repository:
git clone https://github.com/sumangalam17/Blog-management.git

2. Navigate to the project folder using your command line interface:

cd blog-management

3. Install the project dependencies by running the following command:

npm install

4. Start the development server with:

npm run dev
