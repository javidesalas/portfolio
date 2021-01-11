export const themer = (classes, classesToTheme, theme) => {
    const classesToThemeArr = classesToTheme.split(" ")
    const themedClassesArr = classesToThemeArr.map(elm => ` ${elm}--${theme}`)
    return classes.concat(themedClassesArr.join()) 
}