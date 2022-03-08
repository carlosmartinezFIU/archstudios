import style from '../global-style.css';
import { createNavbar } from './navbar';
import { createFooter } from './footer';

import mapLogo from '../assets/contact/desktop/image-map.png';
import mapLogoTablet from '../assets/contact/tablet/image-map.png';
import mapLogoMobile from '../assets/contact/mobile/image-map.png';

import arrowLogo from "../assets/icons/icon-arrow.svg";

import phoneLogo from '../assets/contact/desktop/image-hero.jpg';
import phoneLogoTablet from '../assets/contact/tablet/image-hero.jpg';
import phoneLogoMobile from '../assets/contact/mobile/image-hero.jpg';

function createContact(){
    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contact_wrapper");

    return contactWrapper;
}

function contactHeader(){
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("contact_header_container");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("contact_header_image_container");

    let phoneImage = document.createElement("img");
    phoneImage.classList.add("contact_phone_image");
    phoneImage.src = phoneLogo;

    let phoneImageTablet = document.createElement("img");
    phoneImageTablet.classList.add("contact_phone_image_tablet");
    phoneImageTablet.src = phoneLogoTablet;

    let phoneImageMobile = document.createElement("img");
    phoneImageMobile.classList.add("contact_phone_image_mobile");
    phoneImageMobile.src = phoneLogoMobile;
    imageContainer.append(phoneImage, phoneImageTablet, phoneImageMobile);

    const contactHeaderContain = document.createElement("div");
    contactHeaderContain.classList.add("contact_header_title_container");
    let contactTitle = document.createElement("p");
    contactTitle.classList.add("contact_header_title");
    contactTitle.innerText = "Contact";
    contactHeaderContain.append(contactTitle);


    const contactDescriptionContain = document.createElement("div");
    contactDescriptionContain.classList.add("contact_description_container");
    let upperText = document.createElement("p");
    upperText.classList.add("contact_header_description_title");
    upperText.innerText = "Tell us about your project";

    let lowerText = document.createElement("p");
    lowerText.classList.add("contact_lower_description");
    lowerText.innerText = "We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!";

    contactDescriptionContain.append(upperText, lowerText);

    const rightContentContainer = document.createElement("div");
    rightContentContainer.classList.add("contact_right_content_container");
    rightContentContainer.append(contactHeaderContain, contactDescriptionContain);

    headerContainer.append(imageContainer, rightContentContainer);

    return headerContainer;
}

function contactDetail(){
    const detailWrapper = document.createElement("div");
    detailWrapper.classList.add("contact_detail_wrapper");

    const detailTitleContainer = document.createElement("div");
    detailTitleContainer.classList.add("detail_contact_detail_container");
    let detailTitle = document.createElement("p");
    detailTitle.innerText = "Contact Detail";
    detailTitleContainer.append(detailTitle);



    const locationDescriptionContainer = document.createElement("div");
    locationDescriptionContainer.classList.add("detail_top_container");
    const leftPanel = document.createElement("div");
    leftPanel.classList.add("contact_detail_left_panel");
    const rightPanel = document.createElement("div");
    rightPanel.classList.add("contact_detail_right_panel");

    const leftOne = document.createElement("p");
    leftOne.classList.add("left_one_details");
    leftOne.innerText = "Main Office";

    const leftTwo = document.createElement("p");
    leftTwo.classList.add("left_two_details");
    leftTwo.innerText = "Mail: archone@gmail.com";

    const leftThree = document.createElement("p");
    leftThree.classList.add("left_three_details");
    leftThree.innerText = "Address: 1892 Chenoweth Drive TN";

    const leftFour = document.createElement("p");
    leftFour.classList.add("left_four_details");
    leftFour.innerText = "Phone: 123-456-7894";

    leftPanel.append(leftOne, leftTwo, leftThree, leftFour);


    const rightOne = document.createElement("p");
    rightOne.classList.add("right_one_details");
    rightOne.innerText = "Office II";

    const rightTwo = document.createElement("p");
    rightTwo.classList.add("right_two_details");
    rightTwo.innerText = "Mail: archtwo@gmail.com";

    const rightThree = document.createElement("p");
    rightThree.classList.add("right_three_details");
    rightThree.innerText = "Address: 3399 Wines Lane TX";

    const rightFour = document.createElement("p");
    rightFour.classList.add("right_four_details");
    rightFour.innerText = "Phone: 832-123-4321";

    rightPanel.append(rightOne, rightTwo, rightThree, rightFour);

    const panelContainer = document.createElement("div");
    panelContainer.classList.add("detail_panel_container");
    panelContainer.append(leftPanel, rightPanel);

    locationDescriptionContainer.append(detailTitleContainer, panelContainer);

    const mapContainer = document.createElement("div");
    mapContainer.classList.add("detail_map_container");

    let imageMap = document.createElement("img");
    imageMap.classList.add("image_map_detail_desktop");
    imageMap.src = mapLogo;

    let imageMapTablet = document.createElement("img");
    imageMapTablet.classList.add("image_map_detail_tablet");
    imageMapTablet.src = mapLogoTablet;


    let imageMapMobile = document.createElement("img");
    imageMapMobile.classList.add("image_map_detail_mobile");
    imageMapMobile.src = mapLogoMobile;
    mapContainer.append(imageMap, imageMapTablet, imageMapMobile);



    detailWrapper.append(locationDescriptionContainer, mapContainer);

    return detailWrapper;
}


function contactConnect(){
    const connectWrapper = document.createElement("div");
    connectWrapper.classList.add("contact_connect_wrapper");

    const connectTitleContainer = document.createElement("div");
    connectTitleContainer.classList.add("contact_connect_container");
    let titleConnect = document.createElement("p");
    titleConnect.classList.add("contact_title");
    titleConnect.innerText = "Connect with us";
    connectTitleContainer.append(titleConnect);


    const formContainer = document.createElement("div");
    formContainer.classList.add("detail_form_container");
    formContainer.id = "detail_form_container";

    let form = document.createElement("form");
    form.classList.add("form_detail");

    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    nameInput.id = "input_name";

    let emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.placeholder = "Email";
    emailInput.id = "input_email";

    let messageInput = document.createElement("input");
    messageInput.type = "text";
    messageInput.placeholder = "Message       If not input N/a";
    messageInput.id = "input_message";

    const arrowContainer = document.createElement("div");
    arrowContainer.classList.add("connect_arrow_container");
    arrowContainer.id = "connect_arrow_container";

    let arrow = document.createElement('img');
    arrow.src = arrowLogo;

    arrowContainer.append(arrow);


    formContainer.append(nameInput, emailInput, messageInput, arrowContainer);





    connectWrapper.append(connectTitleContainer, formContainer);

    return connectWrapper;

}


function loadContact(){
    const getContactPage = document.getElementById("contact_page");
    const newNavbar = createNavbar();
    const newContact = createContact();
    const newHeader = contactHeader();
    const newDetail = contactDetail();
    const newConnect = contactConnect();
    const newFooter = createFooter();

    newContact.append(newNavbar, newHeader, newDetail, newConnect, newFooter);

    getContactPage.append(newContact);

    const getArrow = document.getElementById("connect_arrow_container");
    getArrow.addEventListener("click", function(){
        checkForm();
    });

}

function checkForm(){
    let getInputOne = document.getElementById("input_name");
    let getInputTwo = document.getElementById("input_email");
    let getInputThree = document.getElementById("input_message");
    if(getInputOne.placeholder == "Name"){
        getInputOne.placeholder = "Name            Can't be empty";
        getInputOne.style.color = "red";
    }
    else
    {
        getInputOne.style.color = "black"; 
    }

    if(getInputTwo.placeholder == "Email"){
        getInputTwo.placeholder = "Email            Can't be empty";
        getInputTwo.style.color = "red";
    }
    else
    {
        getInputTwo.style.color = "black"; 
    }

    if(getInputThree.placeholder == "Message       If not input N/a"){
        getInputThree.placeholder = "Message         Can't be empty";
        getInputThree.style.color = "red";
    }
    else
    {
        getInputThree.style.color = "black"; 
    }

}




loadContact();