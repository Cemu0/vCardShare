

const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches

const lightTheme = {
backgroundColor : "white",
color : "white"
}

const darkTheme = {
backgroundColor : "black",
color : "white"
}

//set theme to body
document.body.style.backgroundColor = isDark ? darkTheme.backgroundColor : lightTheme.backgroundColor
document.body.style.color = isDark ? darkTheme.color : lightTheme.color