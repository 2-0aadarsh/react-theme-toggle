# Dynamic Theme Switcher

## Overview
This project is a **modern and professional** React.js application that implements a **dynamic dark and light theme** using **Context API** and **Tailwind CSS**. Users can seamlessly toggle between dark and light modes, with their preferences stored in **localStorage**.

## Features
- **Dark & Light Mode** support.
- **Seamless Theme Switching** with Context API.
- **Modern UI Design** using Tailwind CSS.
- **Persistent Theme Storage** using `localStorage`.
- **Responsive Design** for all devices.

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **State Management:** React Context API
- **Icons:** React Icons

## Project Structure
```
📦 Theme-Switcher
├── 📂 src
│   ├── 📂 components         # Reusable UI components
│   ├── 📂 context            # Context API for theme management
│   ├── 📜 App.jsx            # Main application file
│   ├── 📜 index.js           # Entry point
│   ├── 📜 styles.css         # Global styles
├── 📜 package.json           # Dependencies & scripts
├── 📜 tailwind.config.js     # Tailwind customization
├── 📜 .gitignore             # Ignored files
└── 📜 README.md              # Project documentation
```

## Installation & Setup
Follow these steps to run the project on your local machine:

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/2-0aadarsh/react-theme-toggle
cd theme-switcher
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Development Server**
```sh
npm run dev
```
Now, open **`http://localhost:5173`** in your browser to see the project in action.

## How It Works
1. **Theme Context API** handles the theme state globally.
2. The **`useEffect`** hook updates the theme in `localStorage`.
3. **Tailwind CSS Variables** apply styles dynamically based on the theme.

## Usage
- Click the **Light Mode** button to enable light mode.
- Click the **Dark Mode** button to enable dark mode.
- The selected theme persists across sessions.

## Customization
- Modify the colors in **`styles.css`** under `[data-theme]`.
- Customize Tailwind settings in **`tailwind.config.js`**.

## Contributing
Contributions are welcome! Feel free to **fork** this repository, create a **new branch**, and submit a **pull request**.

---

**Made by Aadarsh**
