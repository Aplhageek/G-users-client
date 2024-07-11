# 🚀 GitHub User Repositories Viewer

Welcome to the **GitHub User Repositories Viewer**! This project allows you to search for GitHub users and view their repositories in a user-friendly interface. Built with **React**, **TypeScript**, and **Axios**, it fetches data from the GitHub API and displays it beautifully.

## NOTE
- Both the frontend and backend are deployed on servers far from India which may cause it to slow down little for best experience clone and run on local 

## ✨ Features

- 🔍 **Search GitHub Users**: Enter a GitHub username to fetch user details.
- 📂 **View Repositories**: See a list of public repositories for the searched user.
- 🌟 **User Details**: Display user information such as bio, location, blog, and more.
- 🗄️ **Repository Details**: Display repository information such as name, description, and more.

## 🛠️ Tech Stack

- ⚛️ **React**: Frontend library for building user interfaces.
- 🌐 **TypeScript**: Type-safe JavaScript for writing robust code.
- 🚀 **Axios**: HTTP client for making API requests.
- 🍞 **React Hot Toast**: Notifications for user feedback.

## 📦 Installation

To get a copy of this project up and running on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/github-user-repos-viewer.git
cd github-user-repos-viewer
```
### 2. Install Dependencies
```bash
npm install
```
### 2. Start the Development Server
```bash
npm start
```

The app will be available at http://localhost:3000.


## 🧑‍💻 Usage
-Search for a User: Enter a GitHub username in the input field and press enter.
-View User Details: User details will be displayed including profile picture, bio, location, and more.
-View Repositories: A list of the user's public repositories will be displayed. Click on a repository to view more details.


## 📝 Code Overview
### HomePage.tsx
-Contains the main logic for fetching user details and repositories.
-Initializes state from localStorage to persist data across sessions.
-Uses axios to fetch data from the GitHub API.
-Input.tsx
-Component for user input to search for GitHub users.
-Calls the fetchUser function passed as a prop.
-UserCard.tsx
-Displays user details such as profile picture, bio, location, etc.
-RepoCard.tsx
-Displays basic information about each repository.
-Allows navigation to a detailed view of the repository (if implemented).

## 🌟 Contributions
Contributions are welcome! Feel free to open an issue or submit a pull request.






