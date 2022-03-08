import style from "../global-style.css";

import paramourImg from '../assets/home/desktop/image-hero-paramour.jpg';
import paramourTablet from '../assets/home/tablet/image-hero-paramour.jpg';
import paramourPhone from '../assets/home/mobile/image-hero-paramour.jpg';


import arrowLogo from '../assets/icons/icon-arrow.svg';

export function createHeader(){
    const headerWrapper = document.createElement("div");
    headerWrapper.classList.add("header_wrapper");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("header_image_container");

    let image = document.createElement("img");
    image.src = paramourImg;
    image.classList.add("paramour_home_desktop_image");


    let imageTablet = document.createElement("img");
    imageTablet.src = paramourTablet
    imageTablet.classList.add("paramour_home_tablet_image");

    let imageMobile = document.createElement("img");
    imageMobile.src = paramourPhone;
    imageMobile.classList.add("paramour_home_mobile_image");

    imageContainer.append(image, imageTablet, imageMobile);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("header_description_container");

    const upperContainer = document.createElement("div");
    upperContainer.classList.add("upper_container");

    let titleUpper = document.createElement("p");
    titleUpper.classList.add("header_title_upper");
    titleUpper.innerText = "Project";

    let titleLower = document.createElement("p");
    titleLower.classList.add("header_title_lower");
    titleLower.innerText = "Paramour";

    upperContainer.append(titleUpper, titleLower);

    const paragrapghContainer = document.createElement("div");
    paragrapghContainer.classList.add("header_paragraph_container");

    let lowerParagraph = document.createElement("p");
    lowerParagraph.classList.add("header_lower_paragraph");
    lowerParagraph.innerText = "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.";

    paragrapghContainer.append(lowerParagraph);

    /*********************/
    descriptionContainer.append(upperContainer, paragrapghContainer);
    /***************** */

    const portfolioContainer = document.createElement("a");
    portfolioContainer.classList.add("header_portfolio_container");
    portfolioContainer.href = "portfolio.html";

    let arrowImage = document.createElement("img");
    arrowImage.src = arrowLogo;


    let innerPortfolio = document.createElement("p");
    innerPortfolio.classList.add("portfolio_inner_text");
    innerPortfolio.innerText = "See Our Portfolio";

    portfolioContainer.append(innerPortfolio, arrowImage);

    const bottomNavigation = document.createElement("div");
    bottomNavigation.classList.add("bottom_navigation_bar");

    let buttonOne = document.createElement("p");
    buttonOne.classList.add("bottom_one_btn");
    buttonOne.innerText = "01";
    let buttonTwo = document.createElement("p");
    buttonTwo.classList.add("bottom_two_btn");
    buttonTwo.innerText = "02"
    let buttonThree = document.createElement("p");
    buttonThree.classList.add("bottom_three_btn");
    buttonThree.innerText = "03";
    let buttonFour = document.createElement("p");
    buttonFour.classList.add("bottom_four_btn");
    buttonFour.innerText = "04";

    bottomNavigation.append(buttonOne, buttonTwo, buttonThree, buttonFour);



    headerWrapper.append(imageContainer, descriptionContainer, portfolioContainer, bottomNavigation);
    return headerWrapper;
}