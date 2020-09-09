/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import styled, { injectGlobal } from 'react-emotion'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PenguinIco from '../penguin_fav.ico';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Fade from 'react-reveal/Fade';

import { Helmet } from "react-helmet"

import '../swiper.css';
import Resume from '../Resume_Bhavesh.pdf';
import GilroyLightOTF from '../fonts/Gilroy-Light.otf';

injectGlobal`
  @font-face {
    font-family: Gilroy-Light;
    src: local('Gilroy-Light'), url('${GilroyLightOTF}') format("opentype");
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #434343;
  }
  html {
    background: #FFF;
    border: 0;
    margin: 0;
    font-size: 18px;
  }
  body {
    font-family: 'Inter', sans-serif;
    border: 0;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    padding-bottom: 4rem;
    padding-top: 4rem;
  }
  .swiper-button-prev, .swiper-button-next {
    top: 0;
    margin-top: 0;
    padding-left: 4px;
    padding-right: 4px;
    transform: scale(1.4);
    width: 44px;
    transition: transform 0.2s ease-in-out;
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    transform: scale(1);
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    left: 60px;
  }
  select {
    appearance: none;
    border:none;
    font-size: 1rem;
    width: 100%;
    color: white;
    padding: .75rem 1rem;
    border-radius: .25rem;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='white'%3E%3Cpolygon points='0,0 100,0 50,50'/%3E%3C/svg%3E") #7886d7 no-repeat 98% 77%;
    background-size: 25px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.08);
    &:focus {
      outline: 0px;
      box-shadow: 0 0 0 3px rgba(101,116,205,.5);
    }
    &:hover {
      cursor: pointer;
    }
  }
  select::-ms-expand {
    display:none;
  }
  select option {
    background: #8D7AE7;
    font-size: 1rem;
  }
`;

const Page = styled('div')`
	${tw`text-white p-0 m-0 bg-indigo-darker antialiased leading-normal relative`};
  background: #FFF;
  color: #2C274D;
  min-height: calc(100vh - 16px);
  @media (min-width: 576px) {
    min-height: calc(100vh - 32px);
  }
`;

const Header = styled('div')`
  background: #FF;
`;

const Navbar = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem 2rem;
  align-items: center;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #2C274D;
    text-decoration: none;
    font-weight: 400;
    margin: 0 1rem;
    outline: none;
  }
  a:hover{
    transition: transform 0.2s ease-in-out;
    font-weight: 700;
  }
`

const Content = styled('section')`
  ${tw`sm:px-8 px-4 md:px-24`};
`;

const Intro = styled(Content)`
  ${tw`flex flex-wrap py-8 md:py-32`};
  align-items:center;
`;

const SocialTitle = styled('div')`
  ${tw`flex-1 sm:flex-col`};
`;


const Social = styled('section')`
  ${tw`flex flex-row sm:justify-start mt-8'`};
`;


const VectorDesign = styled('div')`
  ${tw`flex-1 sm:flex-col`};
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: none;
  }
`;

const VectorImage = styled('div')`
  height: 25vw;
  float:right;
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: 45vw;
    float:left;
  }

`;

const Title = styled('h1')`
  font-family: 'Inter', sans-serif;
  ${('font-size: 4vw; color: #000; margin: 0; letter-spacing: -2.5px; font-weight: 600')};
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12.5vw;
    letter-spacing:-1.5px;
    line-height: 7vh;
  }

  @keyframes rotate {
	0% { transform: rotate(0deg); }
	25% { transform: rotate(10deg); }
	50% { transform: rotate(0deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg);}
}
`;

const Descr = styled('p')`
font-family: 'Inter', sans-serif;
  line-height: 1.2;
  ${('color: #000')};
  @keyframes rotate {
	0% { transform: rotate(0deg); }
	25% { transform: rotate(10deg); }
	50% { transform: rotate(0deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg);}
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  font-size: 14px;
  line-height: 1.5;
}
`;



const Button = styled(OutboundLink)`
  ${tw`cursor-pointer my-1 mx-1 py-1 px-2 rounded-lg no-underline focus:outline-none focus:shadow-outline`};
  transition: all 0.3s ease-in-out;
  color: black;
  &:hover {
    ${tw`shadow-md`};
    transform: translateY(-10px);
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 14px;
  }
`;

const SliderWrapper = styled('section')`
  ${tw`sm:px-8 px-4 md:px-24`};
`;

const Item = styled('div')`
  ${tw`w-64 bg-black rounded-lg flex`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    ${tw`shadow-md`};
    transform: translateY(-15px);
  }
  height: 300px;
`;

// const ItemContent = styled('div')`
//   ${tw `py-8 px-6 inline-block flex-wrap content-between relative`};
//   z-index: 10;
//   transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//   opacity: 0;
//   &:hover {
//     opacity: 1;
//   }
// `;

// const Top = styled('div')`
//   ${tw `z-30 flex flex-col`};
// `;

// const Bottom = styled('div')`
//   ${tw `z-30`};
// `;

const Repo = styled(OutboundLink)`
  ${tw`text-black text-sm mb-4 py-1 no-underline `};
`;

const BGImage = styled('div')`
  ${tw`absolute pin rounded-lg`};
  z-index:0;
  .gatsby-image-outer-wrapper {
    position: static !important;
  }
  .gatsby-image-wrapper {
    position: static !important;
  }
  img {
    ${tw`rounded-lg`};
    opacity: 1 !important;
  }
  .tint {
    position: relative;
    cursor: pointer;
    box-shadow: rgba(0,0,0,.2) 3px 5px 5px;
  }
  .tint:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,255,255, 0.5);
    transition: all .3s linear;
  }
  .tint:hover:before { background: none; }
`;

// const ItemTitle = styled('h2')`
//   ${tw `text-3xl mb-4`};
//   margin-top: 150px;
// `;

class Index extends Component {
  render() {
    const {
      data: {
        allSitesYaml: { edges },
      },
    } = this.props;

    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 'auto',
      spaceBetween: 40,
      breakpoints: {
        460: {
          slidesPerView: 1,
        },
      },
    };

    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bhavesh</title>
          <link rel="icon" type="image/png" href={PenguinIco} sizes="16x16" />
        </Helmet>
        <Page>
          <Intro>
            <SocialTitle>
              <Fade bottom>
                <Title>
                  Bhavesh Chowdhury
                </Title>
                <Descr>
                  23 y/o UI Engineer from San Francisco. Previously @Linked<b style={{ color: '#0077B5' }}>in</b>
                </Descr>
                <Social>
                  <Button role="button" href={Resume} target="_blank">
                    Resume
                  </Button>
                  <Button role="button" href="https://linkedin.com/in/bhavesh-chowdhury" target="_blank">
                    Linkedin
                  </Button>
                  <Button role="button" href="https://github.com/bhaveshc20" target="_blank">
                    GitHub
                  </Button>
                  <Button role="button" href="https://dribbble.com/bhaveshc20" target="_blank">
                    Dribbble
                  </Button>
                </Social>
              </Fade>
            </SocialTitle>
            <VectorDesign>
              <VectorImage>
                <svg height="30vw" viewBox="0 0 572 557" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Desktop-HD" transform="translate(-802.000000, -240.000000)">
                      <g id="gamer-monochrome" transform="translate(802.000000, 240.000000)">
                        <path d="M319.35678,337.030731 C324.23905,328.172342 410.167009,321.19505 434,319.42637 C425.948009,310.935207 415.973155,289.830957 408.694817,265.466641 C403.053917,272.923576 396.459096,280.710264 393.026485,282.501428 C380.670585,288.946617 309.419482,283.453217 306.30234,283.453217 C303.185198,283.453217 302.208744,285.086998 299.196759,285.289347 C283.303091,285.49919 269.505044,277.187893 269.29473,275.449191 C269.084417,273.710488 273.899087,265.301764 276.250088,264.897066 C276.963651,264.769661 279.089316,265.211831 281.740764,265.878833 C282.474093,265.544793 283.242482,265.293425 284.031676,265.129393 C287.253974,264.59729 295.050585,267.18286 297.551809,267.18286 C300.053034,267.18286 308.683386,263.435657 311.071943,262.776149 C313.4605,262.116641 359.203618,248.259483 360.322784,246.790579 C361.441951,245.321676 375.25502,228.804003 378.462296,225.004339 C377.877675,224.19379 377.3745,223.327752 376.960059,222.418769 C376.389209,218.671565 387.956435,198.099419 401.228699,185.51631 C403.068939,177.429845 406.17857,170.452552 410.850527,165.154007 C407.971239,161.61165 405.111982,158.026826 402.272754,154.399533 C392.252833,150.794723 383.044119,140.909601 378.67261,127.502107 C377.83733,124.929677 377.20447,122.296146 376.779791,119.625486 C374.376212,116.178058 371.987655,112.723137 369.606609,109.290699 C360.645765,107.207254 351.917768,103.662399 351.917768,99.1507662 C351.917768,96.033093 354.456548,93.5224668 357.926716,92.3608337 C328.512915,49.9125138 300.015478,12.1407038 263.060447,2.53287431 C210.331926,-11.1594068 140.553016,32.3681076 96.8304065,91.9336525 C53.1077973,151.499197 35.5166015,226.892929 47.8424564,301.537221 C60.1683114,376.181512 102.291038,450.083857 160.675481,470.648509 C202.084645,485.210142 251.688512,472.994259 301.337447,451.620211 C307.143593,404.008244 315.916657,343.243594 319.35678,337.030731 Z" id="Path" fill="#FFE1D9" fill-rule="nonzero"></path>
                        <path d="M377.179969,110.909015 C376.949914,110.623539 376.72728,110.315526 376.519488,110 C376.174477,110.96332 375.998665,111.98033 376,113.005008 L376,128.03005 C375.999179,132.654657 379.455315,136.529832 384,137 C382.197639,133.871361 380.729856,130.557146 379.621526,127.113523 C377.925199,121.886559 377.100074,116.410236 377.179969,110.909015 L377.179969,110.909015 Z" id="Path" fill="#FF7A59" fill-rule="nonzero"></path>
                        <path d="M307.01911,283.164751 C303.902965,283.164751 302.926823,284.742444 299.915801,284.937846 C285.386307,285.118774 272.621376,278.424436 270.37625,276 L33.0987144,276 L0,293 L389,293 L373.599487,285.089825 C348.137204,286.016177 309.30178,283.164751 307.01911,283.164751 Z" id="Path" fill="#E0E0E0" fill-rule="nonzero"></path>
                        <path d="M393.024352,399.543549 L393.024352,391.259332 C387.012307,390.604126 381.183556,389.858546 376,389 C377.53967,393.518664 380.12045,401.878193 383.141136,412 C390.252946,407.895547 397.225452,403.715783 404,399.543549 L393.024352,399.543549 Z" id="Path" fill="#F2F2F2" fill-rule="nonzero"></path>
                        <path d="M310.5,304 L310.5,393" id="Path" stroke="#A4A4A4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M379,224 C375.809442,227.768657 362.040845,244.313433 360.997205,245.69403 C359.953564,247.074627 314.510483,260.970149 312.117565,261.61194 C309.724647,262.253731 301.122069,266 298.699332,266 C296.276596,266 288.501475,263.425373 285.2811,263.955224 C284.49475,264.11592 283.729389,264.36631 283,264.701493" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M516.932958,352.892802 C515.948418,343.327399 509.772663,309.416409 506.744456,300 L506.744456,300 C499.957093,311.427825 445.315095,330.0744 436.245388,321.604102 C435.894832,321.283765 435.544276,320.918731 435.186261,320.546246 C411.512537,322.304373 326.193152,329.240035 321.345036,338.045569 C315.706304,348.266544 295.672396,506.550115 298.223251,509.07556 C300.774106,511.601005 310.835812,515.296052 317.660468,513.545374 C321.777637,509.395897 358.436854,394.834558 359.182718,385.64909 C373.719608,391.132062 424.319023,394.536571 439.601776,394.536571 C485.890098,394.536571 518.685738,369.788699 516.932958,352.892802 Z" id="Path" fill="#000000" fill-rule="nonzero"></path>
                        <path d="M381,504 L374,545" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M400,400 L392,445" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <polyline id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points="487.855936 227.767233 505.996302 161 570 161 509.302711 399 392 399 392 390.744843"></polyline>
                        <path d="M398.451432,240 C389.66892,235.100489 379.726746,227.773628 377.020866,221.783677 C376.433304,218.049294 388.339174,197.547529 402,185" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M400,205 C400.164841,187.509404 403.866282,172.268135 413,163" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M434.238432,154.104716 C435.29723,154.037399 436.378555,154 437.497427,154 C473.609185,154 508.384306,291.320121 506.957557,296.817713 C504.036477,308.089646 444.878973,328.703746 435.38734,319.847761 C427.127217,312.166092 416.546749,290.362717 409,264.909241" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M502,399 L530,545" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <polyline id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points="314 513.664987 302.196474 555 251 532.186398 293.959698 523.246851 297.806045 510"></polyline>
                        <polyline id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points="401.435137 493 419 532.154978 366 548 392.526072 513.29978 386.939283 500.714521"></polyline>
                        <path d="M414,173 C413.530374,168.208205 412.429907,159.501985 411,156" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M430.290892,143 C432.044297,148.833242 435.185239,157.09885 436.752258,158.984118 C437.974119,160.46276 434.563954,166.155531 429,170" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M432,137.555759 C429.363157,145.51813 424.155761,151.620134 416.996511,153.97908 C402.619089,158.711854 385.803691,146.537611 379.432548,126.817719 C377.660926,121.39761 376.845694,115.705161 377.024036,110" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M412.149126,115.975053 C411.014167,116.175924 409.862932,116.271 408.71031,116.259053 C405.825901,116.259053 400.409204,112.828632 400.409204,108.89 C394.288263,108.994632 394.288263,111.012526 385.889761,111.012526 C376.374955,111.012526 353,106.214421 353,98.8453684 C353,93.8529474 359.525508,90.4150526 365.953621,91.6332632 C361.600785,89.3089474 357.712451,84.5108421 357.712451,81.3345263 C357.712451,76.8876842 363.331431,73.816 367.684267,73.816 C372.846236,73.816 377.296468,75.9833684 379.521584,78.1058947 C377.753478,75.0267368 379.46914,67 383.724581,67 C398.648591,67 437,93.4493684 437,120.063158 C437,134.345368 434.467713,138 433.508741,138 C432.549768,138 424.121299,131.475474 423.342133,126.408316" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M411,119.324613 C411.624384,115.51476 415.026786,112.790809 418.884102,113.012628 C422.741418,113.234448 425.808599,116.330439 425.991426,120.186712 C426.174252,124.042985 423.413712,127.414827 419.594656,128" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <rect id="Rectangle" fill="#A4A4A4" fill-rule="nonzero" x="0" y="294" width="390" height="11"></rect>
                        <path d="M48.5,305 L48.5,533" id="Path" stroke="#A4A4A4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M79.5,304 L79.5,492" id="Path" stroke="#A4A4A4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M339.5,305 L339.5,533" id="Path" stroke="#A4A4A4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <rect id="Rectangle" fill="#FF7A59" fill-rule="nonzero" x="143" y="271" width="13" height="16"></rect>
                        <rect id="Rectangle" fill="#E0E0E0" fill-rule="nonzero" x="132" y="76" width="6" height="203"></rect>
                        <path d="M270.401975,277 L228,277 L228,282 L280,282 C276.611865,280.766343 273.386729,279.086239 270.401975,277 L270.401975,277 Z" id="Path" fill="#FF7A59" fill-rule="nonzero"></path>
                        <path d="M390.41513,232 C386.848564,236.510885 375.03478,253.607139 373.673952,255.546819 C342.270224,259.230709 300.77244,269.357645 299.247116,269.410272 C297.721792,269.462899 280.270292,263.779184 277.929967,264.192682 C275.589641,264.60618 270.804311,273.041535 271.006192,274.778225 C271.208073,276.514916 284.950943,284.860053 300.77244,284.649545 C303.763272,284.446555 304.742769,282.807601 307.845756,282.807601 C310.948744,282.807601 381.86883,288.325916 394.176101,281.852797 C400.112901,278.72525 415.590452,257.426355 419,251.284033" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M403.548859,243.092739 C396.316481,238.416882 389.210337,232.445485 387.019832,227.456911 C386.113929,221.500405 416.454271,171.815702 434.705999,182.500184 C456.06156,195.0014 424.124749,249.607667 420.08531,251 C416.988902,250.64261 410.216902,247.426097 403.548859,243.115076" id="Path" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M374.910448,389.779094 L374.910448,389.779094 L372.059701,382.715501 L364.686567,374 L350.925373,391.423528 L343,421.083142 L343.656716,436.50345 L344.261194,436.50345 C346.447761,441.272309 372.037313,497.743675 379.947761,504 C386.402985,503.469296 401.514925,495.321872 405,491.659269 C404.358209,486.74839 381.179104,407.591306 374.910448,389.779094 Z" id="Path" fill="#000000" fill-rule="nonzero"></path>
                        <rect id="Rectangle" fill="#FF7A59" fill-rule="nonzero" x="405" y="103" width="23" height="33" rx="11.5"></rect>
                        <path d="M416.958278,109 C416.958278,104.827939 418.354016,80.254124 405,73" id="Path" stroke="#000000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </VectorImage>
            </VectorDesign>
          </Intro>
          <Fade bottom>
            <SliderWrapper>
              <Title>Portfolio</Title>
              <Swiper {...params}>
                {edges.map(site => {
                  const { id, cover, url } = site.node;
                  return (
                    <Item key={id}>
                      <Repo href={url}>
                        <BGImage>
                          <Img fluid={cover.childImageSharp.fluid} />
                        </BGImage>
                      </Repo>
                    </Item>
                  );
                })}
              </Swiper>
            </SliderWrapper>
          </Fade>
        </Page>
      </React.Fragment>
    );
  }
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allSitesYaml: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const overviewQuery = graphql`
  query OverviewQuery {
    allSitesYaml {
      edges {
        node {
          id
          title
          url
          name
          cover {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
