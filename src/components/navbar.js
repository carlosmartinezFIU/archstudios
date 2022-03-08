import navLogo from '../assets/logo.svg';
import hamburgerLogo from '../assets/icons/icon-hamburger.svg';
import closeBtn from '../assets/icons/icon-close.svg';

export function createNavbar(){
    const navbarWrapper = document.createElement("div");
    navbarWrapper.classList.add("navbar_wrapper");

    const mobileContainer = document.createElement("div");
    mobileContainer.classList.add("mobile_nav_display");
    mobileContainer.id = "mobile_nav_display";

    let mobileOne = createButton("portfolio_anchor_mobile", "Portfolio", "portfolio.html");
    let mobileTwo = createButton("about_anchor_mobile", "About Us", "about.html");
    let mobileThree = createButton("contact_anchor_mobile", "Contact", "contact.html");

    let closer = document.createElement("img");
    closer.src = closeBtn;
    closer.classList.add("close_icon");
    closer.id = "close_icon";

    mobileContainer.append(closer, mobileOne, mobileTwo, mobileThree);


    let hamburger = document.createElement("img");
    hamburger.src = hamburgerLogo;
    hamburger.classList.add("hamburger_icon");
    hamburger.id = "hamburger_icon";


    const navLogoContainer = document.createElement("div");
    navLogoContainer.classList.add("nav_logo_container");

    const logo = document.createElement("img");
    logo.src = navLogo;
    navLogoContainer.append(logo);

    const navButtonContainer = document.createElement("div");
    navButtonContainer.classList.add("nav_button_container");

    let buttonOne = createButton("portfolio_anchor", "Portfolio", "portfolio.html");
    let buttonTwo = createButton("about_anchor", "About Us", "about.html");
    let buttonThree = createButton("contact_anchor", "Contact", "contact.html");


    navButtonContainer.append(buttonOne, buttonTwo, buttonThree);

    navbarWrapper.append(navLogoContainer, navButtonContainer, hamburger, mobileContainer);

    closer.addEventListener("click", function(){
        closeMobile();
    })


    hamburger.addEventListener("click", function(){
        showMobile();
    })


    return navbarWrapper;
}

function createButton(anchorName, innerButton, anchorSource){
    let anchor = document.createElement("a");
    anchor.classList.add(anchorName);
    anchor.id = anchorName;
    anchor.href = anchorSource;

    let description = document.createElement("p");
    description.innerText = innerButton;

    anchor.append(description);

    return anchor;
}


function showMobile(){
    const getBar = document.getElementById("mobile_nav_display");
    getBar.style.display = "block";

    const getMenu = document.getElementById("hamburger_icon");
    getMenu.style.display = "none";
}


function closeMobile(){
    const getBar = document.getElementById("mobile_nav_display");
    getBar.style.display = "none";

    const getMenu = document.getElementById("hamburger_icon");
    getMenu.style.display = "block";
}

