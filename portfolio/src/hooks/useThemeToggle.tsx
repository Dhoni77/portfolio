import { useState } from "react";

export function useThemeToggle(): [string, () => void] {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark')
            setTheme('light');
          } else if(theme === 'light' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
          }
    }

    return [theme, toggleTheme];
}