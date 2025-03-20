import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function App() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10 bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 shadow-md">
        <div className="max-w-6xl mx-auto py-4 px-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wide text-white">
            Theme Selector
          </h1>

          {/* Theme Toggle Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleTheme("light")}
              className="p-3 rounded-full bg-white shadow-md text-yellow-500 transition hover:scale-110"
            >
              <MdLightMode size={24} />
            </button>
            <button
              onClick={() => toggleTheme("dark")}
              className="p-3 rounded-full bg-gray-800 shadow-md text-blue-400 transition hover:scale-110"
            >
              <MdDarkMode size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold capitalize">Professional Theme</h1>
        <p className="text-lg light:text-red-950 dark:text-gray-300">
          Switch between Light and Dark mode dynamically.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <button className="px-6 py-3 bg-[var(--btn-bg)] text-[var(--btn-text)] rounded-lg shadow-md font-semibold transition hover:scale-105">
        Explore Themes
      </button>
    </div>
  );
}

export default App;