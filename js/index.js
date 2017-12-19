resMenu = () => {
    console.log("reached")
    let x = document.getElementById("navbar")
    console.log(x)
    let menu = x.getElementsByTagName('ul')[0];
    console.log(menu.className)
    menu.className === "menu" ? menu.className += " responsive": menu.className = menu.className
    console.log(menu.className)
}