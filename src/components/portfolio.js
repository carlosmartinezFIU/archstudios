import style from '../global-style.css';
import { createNavbar} from "./navbar";
import { createFooter } from './footer';

import imageOneLogo from '../assets/portfolio/desktop/image-seraph.jpg';
import imageOneLogoTablet from '../assets/portfolio/tablet/image-seraph.jpg';
import imageOneLogoMobile from '../assets/portfolio/mobile/image-seraph.jpg';

import imageTwoLogo from '../assets/portfolio/desktop/image-eebox.jpg';
import imageTwoLogoTablet from '../assets/portfolio/tablet/image-eebox.jpg';
import imageTwoLogoMobile from '../assets/portfolio/mobile/image-eebox.jpg';

import imageThreeLogo from '../assets/portfolio/desktop/image-federal.jpg';
import imageThreeLogoTablet from '../assets/portfolio/tablet/image-federal.jpg';
import imageThreeLogoMobile from '../assets/portfolio/mobile/image-federal.jpg';

import imageFourLogo from '../assets/portfolio/desktop/image-del-sol.jpg';
import imageFourLogoTablet from '../assets/portfolio/tablet/image-del-sol.jpg';
import imageFourLogoMobile from '../assets/portfolio/mobile/image-del-sol.jpg';

import imageFiveLogo from '../assets/portfolio/desktop/image-prototype.jpg';
import imageFiveLogoTablet from '../assets/portfolio/tablet/image-prototype.jpg';
import imageFiveLogoMobile from '../assets/portfolio/mobile/image-prototype.jpg';

import imageSixLogo from '../assets/portfolio/desktop/image-228b.jpg';
import imageSixLogoTablet from '../assets/portfolio/tablet/image-228b.jpg';
import imageSixLogoMobile from '../assets/portfolio/mobile/image-228b.jpg';

import imageSevenLogo from '../assets/portfolio/desktop/image-edelweiss.jpg';
import imageSevenLogoTablet from '../assets/portfolio/tablet/image-edelweiss.jpg';
import imageSevenLogoMobile from '../assets/portfolio/mobile/image-edelweiss.jpg';

import imageEightLogo from '../assets/portfolio/desktop/image-netcry.jpg';
import imageEightLogoTablet from '../assets/portfolio/tablet/image-netcry.jpg';
import imageEightLogoMobile from '../assets/portfolio/mobile/image-netcry.jpg';

import imageNineLogo from '../assets/portfolio/desktop/image-hypers.jpg';
import imageNineLogoTablet from '../assets/portfolio/tablet/image-hypers.jpg';
import imageNineLogoMobile from '../assets/portfolio/mobile/image-hypers.jpg';

import imageTenLogo from '../assets/portfolio/desktop/image-sxiv.jpg';
import imageTenLogoTablet from '../assets/portfolio/tablet/image-sxiv.jpg';
import imageTenLogoMobile from '../assets/portfolio/mobile/image-sxiv.jpg';

import imageElevenLogo from '../assets/portfolio/desktop/image-trinity.jpg';
import imageElevenLogoTablet from '../assets/portfolio/tablet/image-trinity.jpg';
import imageElevenLogoMobile from '../assets/portfolio/mobile/image-trinity.jpg';

import imageTwelveLogo from '../assets/portfolio/desktop/image-paramour.jpg';
import imageTwelveLogoTablet from '../assets/portfolio/tablet/image-paramour.jpg';
import imageTwelveLogoMobile from '../assets/portfolio/mobile/image-paramour.jpg';

function createPortfolio(){
    const portfolioWrapper = document.createElement("div");
    portfolioWrapper.classList.add("portfolio_wrapper");

    return portfolioWrapper;

}

function imagePanels(containerName, imageName, imageSource, contentContainerName, upper, lower){
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("portfolio_container");
    imageContainer.classList.add(containerName);

    const image = document.createElement("img");
    image.classList.add(imageName);
    image.src = imageSource

    const contentContainer = document.createElement("div");
    contentContainer.classList.add(contentContainerName);

    const upperText = document.createElement("p");
    upperText.classList.add("portfolio_upper_text");
    upperText.innerText = upper;
    const lowerText = document.createElement("p");
    lowerText.classList.add("portfolio_lower_text");
    lowerText.innerText = lower;

    contentContainer.append(upperText, lowerText);

    imageContainer.append(image, contentContainer);

    return imageContainer;
}

function panelHolder(){
    const panelHolder = document.createElement("div");
    panelHolder.classList.add("panel_holder_grid_container");

    const imageOne = imagePanels("portfolio_one_container", "portfolio_seraph", imageOneLogo, "content_container" ,"Seraph Station", "September 2019");
    const imageOneTablet = imagePanels("portfolio_one_tablet_container", "portfolio_seraph", imageOneLogoTablet, "content_container" ,"Seraph Station", "September 2019");
    const imageOneMobile = imagePanels("portfolio_one_mobile_container", "portfolio_seraph", imageOneLogoMobile, "content_container" ,"Seraph Station", "September 2019");

    const imageTwo = imagePanels("portfolio_two_container", "portfolio_eebox", imageTwoLogo, "content_container" ,"Eebox Building", "August 2017");
    const imageTwoTablet = imagePanels("portfolio_two_tablet_container", "portfolio_eebox", imageTwoLogoTablet, "content_container" ,"Eebox Building", "August 2017");
    const imageTwoMobile = imagePanels("portfolio_two_mobile_container", "portfolio_eebox", imageTwoLogoMobile, "content_container" ,"Eebox Building", "August 2017");

    const imageThree = imagePanels("portfolio_three_container", "portfolio_tower", imageThreeLogo, "content_container" ,"Federall II Tower", "March 2017");
    const imageThreeTablet = imagePanels("portfolio_three_tablet_container", "portfolio_tower", imageThreeLogoTablet, "content_container" ,"Federall II Tower", "March 2017");
    const imageThreeMobile = imagePanels("portfolio_three_mobile_container", "portfolio_tower", imageThreeLogoMobile, "content_container" ,"Federall II Tower", "March 2017");

    const imageFour = imagePanels("portfolio_four_container", "portfolio_del_sol", imageFourLogo, "content_container" ,"Project Del Sol", "January 2016");
    const imageFourTablet = imagePanels("portfolio_four_tablet_container", "portfolio_del_sol", imageFourLogoTablet, "content_container" ,"Project Del Sol", "January 2016");
    const imageFourMobile = imagePanels("portfolio_four_mobile_container", "portfolio_del_sol", imageFourLogoMobile, "content_container" ,"Project Del Sol", "January 2016");

    const imageFive = imagePanels("portfolio_five_container", "portfolio_prototype", imageFiveLogo, "content_container" ,"Le Prototype", "October 2015");
    const imageFiveTablet = imagePanels("portfolio_five_tablet_container", "portfolio_prototype", imageFiveLogoTablet, "content_container" ,"Le Prototype", "October 2015");
    const imageFiveMobile = imagePanels("portfolio_five_mobile_container", "portfolio_prototype", imageFiveLogoMobile, "content_container" ,"Le Prototype", "October 2015");

    const imageSix = imagePanels("portfolio_six_container", "portfolio_228b_tower", imageSixLogo, "content_container" ,"228B Tower", "April 2015");
    const imageSixTablet = imagePanels("portfolio_six_tablet_container", "portfolio_228b_tower", imageSixLogoTablet, "content_container" ,"228B Tower", "April 2015");
    const imageSixMobile = imagePanels("portfolio_six_mobile_container", "portfolio_228b_tower", imageSixLogoMobile, "content_container" ,"228B Tower", "April 2015");

    const imageSeven = imagePanels("portfolio_seven_container", "portfolio_grand_edelweiss", imageSevenLogo, "content_container" ,"Grand Edelweiss Hotel", "December 2013");
    const imageSevenTablet = imagePanels("portfolio_seven_tablet_container", "portfolio_228b_tower", imageSevenLogoTablet, "content_container" ,"228B Tower", "April 2015");
    const imageSevenMobile = imagePanels("portfolio_seven_mobile_container", "portfolio_228b_tower", imageSevenLogoMobile, "content_container" ,"228B Tower", "April 2015");

    const imageEight = imagePanels("portfolio_eight_container", "portfolio_netcry", imageEightLogo, "content_container" ,"Netcry Tower", "August 2012");
    const imageEightTablet = imagePanels("portfolio_eight_tablet_container", "portfolio_228b_tower", imageEightLogoTablet, "content_container" ,"228B Tower", "April 2015");
    const imageEightMobile = imagePanels("portfolio_eight_mobile_container", "portfolio_228b_tower", imageEightLogoMobile, "content_container" ,"228B Tower", "April 2015");

    const imageNine = imagePanels("portfolio_nine_container", "portfolio_hypers", imageNineLogo, "content_container" ,"Netcry Tower", "August 2012");
    const imageNineTablet = imagePanels("portfolio_nine_tablet_container", "portfolio_hypers", imageNineLogoTablet, "content_container" ,"Netcry Tower", "August 2012");
    const imageNineMobile = imagePanels("portfolio_nine_mobile_container", "portfolio_hypers", imageNineLogoMobile, "content_container" ,"Netcry Tower", "August 2012");

    const imageTen = imagePanels("portfolio_ten_container", "portfolio_sxiv", imageTenLogo, "content_container" ,"Hypers", "January 2012");
    const imageTenTablet = imagePanels("portfolio_ten_tablet_container", "portfolio_hypers", imageTenLogoTablet, "content_container" ,"Netcry Tower", "August 2012");
    const imageTenMobile = imagePanels("portfolio_ten_mobile_container", "portfolio_hypers", imageTenLogoMobile, "content_container" ,"Netcry Tower", "August 2012");

    const imageEleven = imagePanels("portfolio_eleven_container", "portfolio_trinity", imageElevenLogo, "content_container" ,"SXIV Tower", "March 2011");
    const imageElevenTablet = imagePanels("portfolio_eleven_tablet_container", "portfolio_hypers", imageElevenLogoTablet, "content_container" ,"Netcry Tower", "August 2012");
    const imageElevenMobile = imagePanels("portfolio_eleven_mobile_container", "portfolio_hypers", imageElevenLogoMobile, "content_container" ,"Netcry Tower", "August 2012");

    const imageTwelve = imagePanels("portfolio_twelve_container", "portfolio_paramour", imageTwelveLogo, "content_container" ,"Trinity Bank Tower", "September 2010");
    const imageTwelveTablet = imagePanels("portfolio_twelve_tablet_container", "portfolio_hypers", imageTwelveLogoTablet, "content_container" ,"Netcry Tower", "August 2012");
    const imageTwelveMobile = imagePanels("portfolio_twelve_mobile_container", "portfolio_hypers", imageTwelveLogoMobile, "content_container" ,"Netcry Tower", "August 2012");

    panelHolder.append(imageOne, imageOneTablet,imageOneMobile, imageTwo, imageTwoTablet, imageTwoMobile, imageThree, imageThreeTablet, imageThreeMobile, imageFour, imageFourTablet, imageFourMobile, 
                       imageFive, imageFiveTablet, imageFiveMobile, imageSix, imageSixTablet, imageSixMobile, imageSeven, imageSevenTablet, imageSevenMobile, 
                       imageEight, imageEightTablet, imageEightMobile, imageNine, imageNineTablet, imageNineMobile, imageTen, imageTenTablet, imageTenMobile,
                    imageEleven, imageElevenTablet, imageElevenMobile, imageTwelve, imageTwelveTablet, imageTwelveMobile,);
    return panelHolder;
}

function loadPortfolio(){
    const getPort = document.getElementById("portfolio_page");
    const newNav = createNavbar();
    const newPortfolio = createPortfolio();
    const newPanelHolder = panelHolder();
    const newFooter = createFooter();

    newPortfolio.append(newNav, newPanelHolder, newFooter);

    getPort.append(newPortfolio);
}

loadPortfolio();