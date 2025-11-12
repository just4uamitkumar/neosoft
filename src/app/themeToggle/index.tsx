import { useTheme } from "next-themes";
import {FaSun, FaMoon  } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
