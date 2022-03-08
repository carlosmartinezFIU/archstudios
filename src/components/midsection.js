import imagemiddle from '../assets/home/desktop/image-welcome.jpg';
import imageBottom from "../assets/home/desktop/image-small-team.jpg";
import arrowLogo from '../assets/icons/icon-arrow.svg';
import bottomeImageTablet from '../assets/home/tablet/image-small-team.jpg';
import bottomeImageMobile from '../assets/home/mobile/image-small-team.jpg';


export function midSection(){

    const middleWrapper = document.createElement("div");
    middleWrapper.classList.add("middle_section_wrapper");

    const middleContainer = document.createElement("div");
    middleContainer.classList.add("middle_section_title_container");

    let middleTitle = document.createElement("p");
    middleTitle.classList.add("middle_section_title");
    middleTitle.innerText = "Welcome";
    middleContainer.append(middleTitle);

    const middleDescriptionImageWrapper = document.createElement("div");
    middleDescriptionImageWrapper.classList.add("middle_image_description_container");

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("middle_section_description_container");

    let descriptionTitle = document.createElement("p");
    descriptionTitle.classList.add("welcome_to_arch_title");
    descriptionTitle.innerText = "Welcome to Arch Studio";

    let middleDescription = document.createElement("p");
    middleDescription.classList.add("middle_section_description");
    middleDescription.innerText = "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results. Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight. We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time."

    contentContainer.append(descriptionTitle, middleDescription);

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("middle_image_container");

    let image = document.createElement("img");
    image.src = imagemiddle;

    imageContainer.append(image);



    let imageContainerBottom = document.createElement("div");
    imageContainerBottom.classList.add("middle_image_bottom_container");

    let imageMobile = document.createElement("img");
    imageMobile.classList.add("water_building_image_mobile");
    imageMobile.src = bottomeImageMobile;

    let imageTablet = document.createElement("img");
    imageTablet.classList.add("water_building_image_tablet");
    imageTablet.src = bottomeImageTablet;

    let imageTwo = document.createElement("img");
    imageTwo.classList.add("desktop_water_building_image");
    imageTwo.src = imageBottom;


    const smallTeamsContainer = document.createElement("div");
    smallTeamsContainer.classList.add("small_team_bottom_container");

    let smallTeamsTitle = document.createElement("p");
    smallTeamsTitle.classList.add("small_teams_title");
    smallTeamsTitle.innerText = "Small team, big ideas";

    let aboutBottomBtnContainer = document.createElement("a");
    aboutBottomBtnContainer.classList.add("about_bottom_button_container");
    aboutBottomBtnContainer.href = "about.html";

    let arrowImage = document.createElement("img");
    arrowImage.src = arrowLogo;

    let aboutBottomBtn = document.createElement("p");
    aboutBottomBtn.classList.add("about_bottom_button");
    aboutBottomBtn.innerText = "About us";

    aboutBottomBtnContainer.append(aboutBottomBtn, arrowImage);

    smallTeamsContainer.append(smallTeamsTitle, aboutBottomBtnContainer);


    imageContainerBottom.append(imageTwo,imageTablet, imageMobile, smallTeamsContainer);





    middleDescriptionImageWrapper.append(contentContainer, imageContainer);

    middleWrapper.append(middleContainer, middleDescriptionImageWrapper, imageContainerBottom);

    return middleWrapper;

}