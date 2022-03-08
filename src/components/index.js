import style from '../global-style.css';
import { createNavbar } from "./navbar";
import { createHeader } from './header';
import { midSection } from './midsection';
import { createFeature } from './feature';
import { createFooter } from './footer';

function createHome(){
    const homeWrapper = document.createElement("div");
    homeWrapper.classList.add("home_wrapper");

    return homeWrapper;
}


function loadHome(){
    const getHome = document.getElementById("home_page");
    const newNav = createNavbar();
    const newHome = createHome();
    const newHeader = createHeader();
    const newMiddle = midSection();
    const newFeature = createFeature();
    const newFooter = createFooter();


    newHome.append(newNav, newHeader);


    getHome.append(newHome, newMiddle, newFeature, newFooter);
}

loadHome();