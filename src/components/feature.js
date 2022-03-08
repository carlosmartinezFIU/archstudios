import firstImg from '../assets/portfolio/desktop/image-del-sol.jpg';
import firstImgTablet from '../assets/portfolio/tablet/image-del-sol.jpg';

import secondImg from '../assets/portfolio/desktop/image-228b.jpg';
import secondImgTablet from '../assets/portfolio/tablet/image-228b.jpg';


import thirdImg from '../assets/portfolio/desktop/image-prototype.jpg';
import thirdImgTablet from '../assets/portfolio/tablet/image-prototype.jpg';

import arrowLogo from '../assets/icons/icon-arrow.svg';


export function createFeature(){
    const featureWrapper = document.createElement("div");
    featureWrapper.classList.add("feature_wrapper");

    let topFeatureContainer = document.createElement('div');
    topFeatureContainer.classList.add("feature_top_title_container");

    let featureLogoContainer = document.createElement("div");
    featureLogoContainer.classList.add("feature_logo_container");

    let featureLogo = document.createElement("p");
    featureLogo.innerText = "Featured";

    let seeAllBtnContainer = document.createElement("a");
    seeAllBtnContainer.classList.add("see_all_btn_container");
    seeAllBtnContainer.href = "portfolio.html";

    let arrowImage = document.createElement("img");
    arrowImage.src = arrowLogo;

    let seeAllBtn = document.createElement("p");
    seeAllBtn.innerText = "See All";
    seeAllBtnContainer.append(seeAllBtn, arrowImage);


    featureLogoContainer.append(featureLogo);
    topFeatureContainer.append(featureLogoContainer, seeAllBtnContainer);


    const mainImageContainer = document.createElement("div");
    mainImageContainer.classList.add("feature_main_image_container");


    let firstImageContainer = document.createElement("div");
    firstImageContainer.classList.add("first_feature_image_container");
    let oneNumber = document.createElement("p");
    oneNumber.classList.add("feature_number_image_one");
    oneNumber.innerText = "1";

    let featureDescriptionContainerOne = document.createElement("div");
    featureDescriptionContainerOne.classList.add("first_image_lower_description");
    let upperfirstDescription = document.createElement("p");
    upperfirstDescription.classList.add("upper_first_feature_text");
    upperfirstDescription.innerText = "Project Del Sol";
    let lowerfirstDescription = document.createElement("p");
    lowerfirstDescription.classList.add("lower_first_feature_text");
    lowerfirstDescription.innerText = "View All Projects";
    featureDescriptionContainerOne.append(upperfirstDescription, lowerfirstDescription);


    let imageOneTablet = document.createElement("img");
    imageOneTablet.classList.add("feature_image_one_tablet");
    imageOneTablet.src = firstImgTablet;

    let imageOne = document.createElement("img");
    imageOne.classList.add("feature_image_one");
    imageOne.src = firstImg;
    firstImageContainer.append(imageOne, imageOneTablet,  oneNumber, featureDescriptionContainerOne)



    let secondImageContainer = document.createElement("div");
    secondImageContainer.classList.add("second_feature_image_container");
    let twoNumber = document.createElement("p");
    twoNumber.classList.add("feature_number_image_two");
    twoNumber.innerText = "2";

    let featureDescriptionContainerTwo = document.createElement("div");
    featureDescriptionContainerTwo.classList.add("second_image_lower_description");

    let uppersecondDescription = document.createElement("p");
    uppersecondDescription.classList.add("upper_first_feature_text");
    uppersecondDescription.innerText = "228B Tower";

    let lowersecondDescription = document.createElement("p");
    lowersecondDescription.classList.add("lower_first_feature_text");
    lowersecondDescription.innerText = "View All Projects";
    featureDescriptionContainerTwo.append(uppersecondDescription, lowersecondDescription);

    let imageTabletTwo = document.createElement("img");
    imageTabletTwo.classList.add("tower_building_image_two_tablet");
    imageTabletTwo.src = secondImgTablet;


    let imageTwo = document.createElement("img");
    imageTwo.classList.add("feature_image_two");
    imageTwo.src= secondImg;
    secondImageContainer.append(imageTwo, imageTabletTwo,  twoNumber, featureDescriptionContainerTwo);



    let thirdImageContainer = document.createElement("div");
    thirdImageContainer.classList.add("third_feature_image_container");
    let threeNumber = document.createElement("p");
    threeNumber.classList.add("feature_number_image_three");
    threeNumber.innerText = "3";

    let featureDescriptionContainerThree = document.createElement("div");
    featureDescriptionContainerThree.classList.add("third_image_lower_description");
    let upperthirdDescription = document.createElement("p");
    upperthirdDescription.classList.add("upper_first_feature_text");
    upperthirdDescription.innerText = "Le Prototype";
    let lowerthirdDescription = document.createElement("p");
    lowerthirdDescription.classList.add("lower_first_feature_text");
    lowerthirdDescription.innerText = "View All Projects";
    featureDescriptionContainerThree.append(upperthirdDescription, lowerthirdDescription);

    
    let imageTabletThree = document.createElement("img");
    imageTabletThree.classList.add("prototype_building_image_three_tablet");
    imageTabletThree.src = thirdImgTablet;


    let imageThree = document.createElement("img");
    imageThree.classList.add("feature_image_three");
    imageThree.src = thirdImg;
    thirdImageContainer.append(imageThree, imageTabletThree, threeNumber,  featureDescriptionContainerThree);

    mainImageContainer.append(firstImageContainer, secondImageContainer, thirdImageContainer);


    featureWrapper.append(topFeatureContainer, mainImageContainer);
    return featureWrapper;
}