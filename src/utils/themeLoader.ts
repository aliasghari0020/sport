export function loadTheme() {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const root = document.documentElement

    const theme = savedTheme || (prefersDark ? "dark" : "light")

    root.setAttribute("data-theme", theme)
    if (theme === "dark") {
        root.classList.add("dark")
    } else {
        root.classList.remove("dark")
    }

    return theme
}

export function toggleTheme() {
    const root = document.documentElement
    const isDark = root.classList.contains("dark")
    const newTheme = isDark ? "light" : "dark"

    if (newTheme === "dark") {
        root.setAttribute("data-theme", 'dark')
        root.classList.add("dark")
    } else {
        root.classList.remove("dark")
        root.setAttribute("data-theme", 'light')

    }

    localStorage.setItem("theme", newTheme)
    return newTheme
}
