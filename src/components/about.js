import style from '../global-style.css';
import { createNavbar } from './navbar';
import { createFooter } from './footer';

import computerImage from '../assets/about/desktop/image-hero.jpg';
import computerImageTablet from '../assets/about/tablet/image-hero.jpg';
import computerImageMobile from '../assets/about/mobile/image-hero.jpg';

import middleLogo from '../assets/about/desktop/image-heritage.jpg';
import jakeLogo from '../assets/about/desktop/avatar-jake.jpg';
import smithLogo from '../assets/about/desktop/avatar-thompson.jpg';
import jacksonLogo from '../assets/about/desktop/avatar-jackson.jpg';
import simpsonLogo from '../assets/about/desktop/avatar-maria.jpg';


function createAbout(){
    const aboutWraper = document.createElement("div");
    aboutWraper.classList.add("about_wrapper");

    return aboutWraper;
}

function aboutHeader(){

    const headerWrapper = document.createElement("div");
    headerWrapper.classList.add("about_header_wrapper");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("about_image_container");

    let image = document.createElement("img");
    image.classList.add("about_computer_image");
    image.src = computerImage;

    let imageTablet = document.createElement("img");
    imageTablet.classList.add("about_computer_image_tablet");
    imageTablet.src = computerImageTablet;

    let imageMobile = document.createElement("img");
    imageMobile.classList.add("about_computer_image_mobile");
    imageMobile.src = computerImageMobile;
    imageContainer.append(image, imageTablet, imageMobile);


    let firstContainer = document.createElement("div");
    firstContainer.classList.add("about_first_container");



    const titleContainer = document.createElement("div");
    titleContainer.classList.add("about_first_title_container");
    let firstTitle = document.createElement("p");
    firstTitle.innerText = "About";
    titleContainer.append(firstTitle);


    const contentContainer = document.createElement("div");
    contentContainer.classList.add("about_content_container");
    let upperTitle = document.createElement("p");
    upperTitle.classList.add("about_upper_title_text");
    upperTitle.innerText = "Your team of professionals";
    let lowerText = document.createElement("p");
    lowerText.classList.add("about_lower_title_text");
    lowerText.innerText = "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.";
    contentContainer.append(upperTitle, lowerText);

    firstContainer.append(titleContainer, contentContainer);

    headerWrapper.append(imageContainer, firstContainer);

    return headerWrapper;
}

function aboutHeritage(){
    const middleWrapper = document.createElement("div");
    middleWrapper.classList.add("about_middle_wrapper");

    let middleContentContainer = document.createElement("div");
    middleContentContainer.classList.add("about_middle_content_container");

    let upperMiddleContentContainer = document.createElement("div");
    upperMiddleContentContainer.classList.add("about_middle_upper_container");
    let aboutMiddleTitle = document.createElement("p");
    aboutMiddleTitle.innerText = "Our Heritage";
    upperMiddleContentContainer.append(aboutMiddleTitle);



    let lowerMiddleContentContainer = document.createElement("div");
    lowerMiddleContentContainer.classList.add("about_middle_lower_container");
    let middleContent = document.createElement("p");
    middleContent.innerText = "Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country. Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. Our small team of world-class professionals provides input on every project.";
    lowerMiddleContentContainer.append(middleContent);


    let middleImageContentContainer = document.createElement("div");
    middleImageContentContainer.classList.add("about_middle_image_container");
    let middleImage = document.createElement("img");
    middleImage.src = middleLogo;
    middleImageContentContainer.append(middleImage);


    middleContentContainer.append(upperMiddleContentContainer, lowerMiddleContentContainer);
    middleWrapper.append(middleContentContainer, middleImageContentContainer);

    return middleWrapper;

}

function aboutLeaders(){
    const aboutLeaderWrapper = document.createElement("div");
    aboutLeaderWrapper.classList.add("about_leader_wrapper");

    const leaderTitle = document.createElement("div");
    leaderTitle.classList.add("about_leader_container_title");
    let theLeaders = document.createElement("p");
    theLeaders.innerText = "The Leaders";
    leaderTitle.append(theLeaders);

    const leaderGridImage = document.createElement("div");
    leaderGridImage.classList.add("about_leader_grid_container");

    let firstImage = aboutImagePanels("about_leader_container", "jake_richards_image", jakeLogo, "about_content_container_jake", "Jake Richards", "Chief Architect");
    let secondImage = aboutImagePanels("about_leader_container", "thomas_image", smithLogo, "about_content_container_smith", "Thompson Smith", "Head of Finance");
    let thirdImage = aboutImagePanels("about_leader_container", "jackson_image", jacksonLogo, "about_content_container_jackson", "Jackson Rourke", "Lead Designer");
    let fourthImage = aboutImagePanels("about_leader_container", "simpson_image", simpsonLogo, "about_content_container_simpson", "Maria Simpson", "Senior Architect");


    leaderGridImage.append(firstImage, secondImage, thirdImage, fourthImage);

    aboutLeaderWrapper.append(leaderTitle, leaderGridImage);
    return aboutLeaderWrapper;

}

function aboutImagePanels(containerName, imageName, imageSource, contentContainerName, upper, lower){
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("about_container");
    imageContainer.classList.add(containerName);

    const image = document.createElement("img");
    image.classList.add(imageName);
    image.src = imageSource

    const contentContainer = document.createElement("div");
    contentContainer.classList.add(contentContainerName);

    const upperText = document.createElement("p");
    upperText.classList.add("about_upper_text");
    upperText.innerText = upper;
    const lowerText = document.createElement("p");
    lowerText.classList.add("about_lower_text");
    lowerText.innerText = lower;

    contentContainer.append(upperText, lowerText);

    imageContainer.append(image, contentContainer);

    return imageContainer;
}




function loadAbout(){
    const getAbout = document.getElementById("about_page");
    const navBar = createNavbar();
    const newAbout = createAbout();
    const newHeader = aboutHeader();
    const newMiddle = aboutHeritage();
    const newLeader = aboutLeaders();
    const newFooter = createFooter();

    newAbout.append(navBar, newHeader, newMiddle, newLeader, newFooter);

    getAbout.append(newAbout);
}

loadAbout();
