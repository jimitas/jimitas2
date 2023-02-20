import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export function ChangeThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div aria-label="DarkModeToggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {mounted && (
          <>
            {theme === "dark" ? (
              <FontAwesomeIcon style={{ height: "30px" }} icon={faMoon} />
            ) : (
              <FontAwesomeIcon style={{ height: "30px" }} icon={faSun} />
            )}
          </>
        )}
      </div>
    </>
  );
}
