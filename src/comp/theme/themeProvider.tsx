"use client";
import { useState, useEffect } from "react"
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="fixed bottom-8 right-8">
            <button
                type="button"
                className="w-11 h-11 rounded-full shadow-md inline-flex justify-center items-center focus:outline-none carTheme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    {theme === "dark" ? <IconMoon></>}
                </button>
        </div>
    )

}