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
import SvgLines from 'react-mt-svg-lines';
import Fade from 'react-reveal/Fade';

import { Helmet } from "react-helmet"

import '../swiper.css';

import BhaveshResume from '../Resume_Bhavesh.pdf'

import GilroyOTF from '../fonts/Gilroy-ExtraBold.otf';
import GilroyLightOTF from '../fonts/Gilroy-Light.otf';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

injectGlobal`
  @font-face {
    font-family: Gilroy-ExtraBold;
    src: local('Gilroy-ExtraBold'), url('${GilroyOTF}') format("opentype");
  }
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
    font-family: Gilroy-Light;
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
  border: 14px solid #8D7AE7;
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
  ${tw`flex flex-wrap py-8 md:py-16`};
`;

const SocialTitle = styled('div')`
  ${tw`flex-1 sm:flex-col`};
`;


const Social = styled('section')`
  ${tw`flex flex-row sm:justify-start mt-8'`};
`;


const VectorDesign = styled('div')`
  ${tw`flex-1 sm:flex-col`};
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
  font-family: Gilroy-ExtraBold;
  line-height: 1.2;
  ${('font-size: 5vw; color: #8D7AE7')};
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 8.5vw;
  }
  .nameTitle {
    color: #2C274D;
  };
  .emoji {
    display: inline-block;
    animation: rotate 2s ease-in-out infinite;
    font-size: 80%;
  };
  .emoji2 {
    display: inline-block;
    font-size: 80%;
  };

  @keyframes rotate {
	0% { transform: rotate(0deg); }
	25% { transform: rotate(10deg); }
	50% { transform: rotate(0deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg);}
}
`;



const Button = styled(OutboundLink)`
  ${tw`cursor-pointer my-1 py-1 px-2 md:px-8 rounded-lg no-underline focus:outline-none focus:shadow-outline`};
  transition: all 0.3s ease-in-out;
  &:hover {
    ${tw`shadow-md`};
    transform: translateY(-10px);
  }
`;

const Twitter = styled(Button)`
  ${tw`my-4 sm:my-0`};
  color: #2C274D;
  display: flex;
  align-items:center;
  justify-content:center;
  font-weight: 300;
`;

const Resume = styled(Button)`
  ${tw`my-4 sm:my-0`};
  color: #2C274D;
  border: #8D7AE7 2px solid;
  display: flex;
  align-items:center;
  justify-content:center;
  font-weight: 300;
`;

const GitHub = styled(Button)`
  ${tw`my-4 sm:my-0`};
  color: #2C274D;
  display: flex;
  align-items:center;
  justify-content:center;
`;

const LinkedIn = styled(Button)`
  ${tw`my-4 sm:my-0`};
  color: #2C274D;
  display: flex;
  align-items:center;
  justify-content:center;
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
          <Header>
            <Navbar>
              <Links>
                <Resume href={BhaveshResume} target="_blank">View Resume</Resume>
              </Links>
            </Navbar>
          </Header>
          <Intro>
            
            <SocialTitle>
              <Fade bottom>
              <Title>
                Hey,<span className="nameTitle"> I'm Bhavesh</span>
              </Title>
              <Social>
                <Twitter role="button" href="https://twitter.com/BhaveshChow">
                  <FaTwitter style={{ color: "#8D7AE7", marginRight: '10px' }} /> Twitter
              </Twitter>
                <GitHub role="button" href="https://github.com/bhaveshc20">
                  <FaGithub style={{ color: "#8D7AE7", marginRight: '10px' }} /> GitHub
        </GitHub>
                <LinkedIn role="button" href="https://linkedin.com/in/bhavesh-chowdhury">
                  <FaLinkedinIn style={{ color: "#8D7AE7", marginRight: '10px' }} />LinkedIn
        </LinkedIn>
              </Social>
              </Fade>
            </SocialTitle>
            <VectorDesign>
              <SvgLines animate={true} duration={5000}>
                <VectorImage>
                <svg height="25vw" viewBox="0 0 1077 756" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="undraw_web_developer" fill-rule="nonzero">
                      <path d="M864.14579,702.42332 C857.16127,729.02121 832.68679,745.64298 832.68679,745.64298 C832.68679,745.64298 819.53646,719.14105 826.52098,692.54316 C833.5055,665.94527 857.97998,649.3235 857.97998,649.3235 C857.97998,649.3235 871.13031,675.82543 864.14579,702.42332 Z" id="Shape" fill="#3F3D56"></path>
                      <path d="M853.55186,696.79661 C833.98935,716.12377 831.80069,745.62789 831.80069,745.62789 C831.80069,745.62789 861.32914,743.79648 880.89169,724.46931 C900.45424,705.14214 902.64285,675.63802 902.64285,675.63802 C902.64285,675.63802 873.11434,677.46944 853.55186,696.79661 Z" id="Shape" fill="#8D7AE7"></path>
                      <path d="M144.73407,601.80833 L181.57547,601.80833 L272.36321,566.28269 C272.36321,566.28269 336.83566,539.96741 331.5726,589.96645 C326.30954,639.96549 317.09919,707.06945 317.09919,707.06945 C317.09919,707.06945 288.15238,693.91181 272.36319,697.8591 C256.574,701.80639 267.10013,617.59748 267.10013,617.59748 C267.10013,617.59748 138.15523,679.4384 126.31335,671.54382 C114.47147,663.64924 111.83995,608.38713 111.83995,608.38713 L144.73407,601.80833 Z" id="Shape" fill="#2F2E41"></path>
                      <path d="M144.73407,601.80833 L181.57547,601.80833 L272.36321,566.28269 C272.36321,566.28269 336.83566,539.96741 331.5726,589.96645 C326.30954,639.96549 317.09919,707.06945 317.09919,707.06945 C317.09919,707.06945 288.15238,693.91181 272.36319,697.8591 C256.574,701.80639 267.10013,617.59748 267.10013,617.59748 C267.10013,617.59748 138.15523,679.4384 126.31335,671.54382 C114.47147,663.64924 111.83995,608.38713 111.83995,608.38713 L144.73407,601.80833 Z" id="Shape" fill="#000000" opacity="0.1"></path>
                      <path d="M202.77793,486.43431 L247.36369,550.49352 L351.30906,637.33395 C351.30906,637.33395 447.35986,659.70195 434.20221,675.49112 C421.04456,691.28029 340.78295,659.70195 340.78295,659.70195 C340.78295,659.70195 221.0484,572.86151 217.10111,566.28268 C213.15382,559.70385 169.7336,497.86295 169.7336,497.86295 L202.77793,486.43431 Z" id="Shape" fill="#A0616A"></path>
                      <path d="M202.77793,486.43431 L247.36369,550.49352 L351.30906,637.33395 C351.30906,637.33395 447.35986,659.70195 434.20221,675.49112 C421.04456,691.28029 340.78295,659.70195 340.78295,659.70195 C340.78295,659.70195 221.0484,572.86151 217.10111,566.28268 C213.15382,559.70385 169.7336,497.86295 169.7336,497.86295 L202.77793,486.43431 Z" id="Shape" fill="#FFFFFF" opacity="0.1"></path>
                      <path d="M176.31242,434.70627 L205.25923,491.28413 C205.25923,491.28413 198.68041,518.91518 188.15429,521.54671 C177.62817,524.17824 132.8922,487.33684 132.8922,487.33684 L176.31242,434.70627 Z" id="Shape" fill="#D0CDE1"></path>
                      <path d="M176.31242,434.70627 L205.25923,491.28413 C205.25923,491.28413 198.68041,518.91518 188.15429,521.54671 C177.62817,524.17824 132.8922,487.33684 132.8922,487.33684 L176.31242,434.70627 Z" id="Shape" fill="#000000" opacity="0.1"></path>
                      <path d="M529.45116,572.51439 L538.00186,607.78595 C538.097187,608.179177 538.082383,608.591062 537.95907,608.97643 L499.17142,730.18769 C498.854896,731.176831 497.890553,731.810582 496.857014,731.708682 C495.823474,731.606783 495.001463,730.796909 494.8842,729.765 L489.51839,682.54584 C489.482753,682.232242 489.514916,681.914647 489.6127,681.61456 L525.21546,572.35095 C525.520669,571.414266 526.41065,570.79407 527.395072,570.832055 C528.379494,570.870041 529.219037,571.556972 529.45116,572.51439 Z" id="Shape" fill="#2F2E41"></path>
                      <polygon id="Shape" fill="#F2F2F2" points="526.306 575.493 534.2 605.756 499.99 716.28 492.096 682.07"></polygon>
                      <path d="M353.94059,739.96358 C355.25636,743.91087 490.78008,738.64781 492.09584,737.33205 C493.24302,735.684315 494.213258,733.920209 494.99046,732.06899 C496.22736,729.43746 497.3589,726.80593 497.3589,726.80593 L492.09586,684.20148 L357.88786,679.43842 C357.88786,679.43842 354.53259,715.543 353.84837,732.06899 C353.6775,736.23995 353.6775,739.17407 353.94059,739.96358 Z" id="Shape" fill="#2F2E41"></path>
                      <polygon id="Shape" fill="#000000" opacity="0.1" points="474.991 689.965 477.622 726.806 418.413 726.806 418.413 689.965"></polygon>
                      <polygon id="Shape" fill="#000000" opacity="0.1" points="398.677 701.806 399.03 701.736 397.361 717.596 364.467 717.596 364.467 701.806"></polygon>
                      <path d="M353.94059,739.96358 C355.25636,743.91087 490.78008,738.64781 492.09584,737.33205 C493.24302,735.684315 494.213258,733.920209 494.99046,732.06899 L353.8484,732.06899 C353.6775,736.23995 353.6775,739.17407 353.94059,739.96358 Z" id="Shape" fill="#000000" opacity="0.1"></path>
                        <path d="M202.77793,485.43431 L247.36369,549.49352 L351.30906,636.33395 C351.30906,636.33395 447.35986,658.70195 434.20221,674.49112 C421.04456,690.28029 340.78295,658.70195 340.78295,658.70195 C340.78295,658.70195 221.0484,571.86151 217.10111,565.28268 C213.15382,558.70385 169.7336,496.86295 169.7336,496.86295 L202.77793,485.43431 Z" id="Shape"></path>
                      <circle id="Oval" fill="#DAA5AD" cx="196.04888" cy="357.07618" r="59.20939"></circle>
                      <path d="M192.10159,409.70675 C192.10159,409.70675 172.36512,443.91662 168.41783,462.33732 C164.47054,480.75802 109.20844,425.49592 109.20844,425.49592 L101.97174,406.41734 C101.97174,406.41734 153.94442,382.0757 149.99713,362.33923 C146.04984,342.60276 192.10159,409.70675 192.10159,409.70675 Z" id="Shape" fill="#DAA5AD"></path>
                      <path d="M202.6277,512.33636 L256.57404,583.38763 L385.51894,679.43842 C385.51894,679.43842 478.9382,699.17489 457.88594,713.64829 C436.83368,728.12169 376.30856,700.49065 376.30856,700.49065 C376.30856,700.49065 246.04792,630.75514 218.41686,601.80833 C190.7858,572.86152 139.47101,524.17824 139.47101,524.17824 L202.6277,512.33636 Z" id="Shape" fill="#DAA5AD"></path>
                        <path d="M202.77793,485.43431 L247.36369,549.49352 L351.30906,636.33395 C351.30906,636.33395 447.35986,658.70195 434.20221,674.49112 C421.04456,690.28029 340.78295,658.70195 340.78295,658.70195 C340.78295,658.70195 221.0484,571.86151 217.10111,565.28268 C213.15382,558.70385 169.7336,496.86295 169.7336,496.86295 L202.77793,485.43431 Z" fill="#A0616A" id="Shape"></path>
                      <path d="M130.26067,622.86056 L146.04986,647.86008 L240.28116,618.21427 C260.95697,611.70953 283.62899,614.10303 301.96792,625.65656 C318.41498,636.0182 328.94109,652.46525 305.25733,676.80689 C257.88982,725.49017 226.31148,699.17489 226.31148,699.17489 C226.31148,699.17489 67.10398,774.17345 40.7887,737.33205 C14.47342,700.49065 13.1577,682.06995 13.1577,682.06995 C13.1577,682.06995 114.4715,618.91326 130.26067,622.86056 Z" id="Shape" fill="#2F2E41"></path>
                      <path d="M327.62531,709.701 C327.62531,709.701 369.72976,737.33205 319.73072,750.48969 C269.73168,763.64733 232.89028,745.22663 232.89028,745.22663 C232.89028,745.22663 189.47006,745.22663 189.47006,722.85863 C189.47006,700.49063 203.94347,697.85911 203.94347,697.85911 L248.67947,704.43793 C248.67947,704.43793 302.62579,689.96454 327.62531,709.701 Z" id="Shape" fill="#D0CDE1"></path>
                      <path d="M244.62111,342.18172 C248.65111,343.97825 252.64732,346.10463 257.02866,346.62612 C261.41,347.14761 266.39921,345.61793 268.47242,341.72312 C269.59224,339.61939 269.7202,337.14486 269.77242,334.76223 C269.93091,327.53706 269.40836,319.72632 264.82978,314.13483 C261.91588,310.57629 257.66231,308.333 254.64604,304.86083 C252.48504,302.37322 251.0468,299.35799 249.49818,296.44942 C243.63218,285.43217 234.9469,274.84383 222.87623,271.66767 C217.83582,270.34138 212.54823,270.4061 207.33678,270.47967 L176.93953,270.90851 C172.02047,270.97791 167.02553,271.05856 162.31653,272.48234 C152.53253,275.44057 145.40874,283.66825 138.88437,291.53661 C134.00318,297.42329 129.10907,303.37086 125.44575,310.08346 C120.193526,319.879211 117.537732,330.856928 117.73152,341.97021 C117.690811,344.820413 118.058806,347.66174 118.82428,350.40753 C119.719772,352.925809 120.829248,355.362786 122.14055,357.69176 C127.84104,368.88849 131.22578,382.87395 124.80598,393.67434 C135.95785,389.11892 146.99189,383.14599 154.3483,373.60664 C157.63923,369.33916 160.22011,364.34348 164.60588,361.21192 C168.99165,358.08036 176.13788,357.80871 178.9518,362.40472 C179.919009,364.263948 180.417064,366.331427 180.4026,368.42714 C180.60811,371.87697 180.6025,375.45972 182.06518,378.59088 C183.52786,381.72204 187.01204,384.24846 190.33855,383.31149 C196.06724,381.69791 195.51864,372.90549 199.93106,368.91149 C203.282,365.87831 208.4518,366.45815 212.7568,365.08123 C217.77262,363.47695 221.53617,359.13164 223.68059,354.32184 C225.31059,350.6659 225.28704,341.09884 228.37143,339.11901 C232.23941,336.63614 241.03572,340.58338 244.62111,342.18172 Z" id="Shape" fill="#2F2E41"></path>
                      <path d="M97.27156,400.17602 C99.9352211,399.46533 102.739552,399.472468 105.39956,400.19671 C113.84574,402.46424 132.77977,408.46706 136.83945,417.60133 C142.10251,429.44321 160.52321,447.86391 160.52321,447.86391 C160.52321,447.86391 185.52273,472.86343 180.25967,489.96837 C174.99661,507.07331 155.26015,526.80977 155.26015,526.80977 C155.26015,526.80977 160.52321,608.38715 134.20792,629.43938 C107.89263,650.49161 97.36652,636.0182 97.36652,655.75466 C97.36652,675.49112 15.78918,737.33205 0,699.17489 C0,699.17489 7.89459,628.12361 5.26306,603.12409 C2.66948,578.48511 6.46634,424.75932 97.27156,400.17602 Z" id="Shape" fill="#D0CDE1"></path>
                      <path d="M139.47102,433.3905 C139.47102,433.3905 219.73264,492.5999 205.25923,517.59942 C205.25923,517.59942 156.57595,541.28317 146.04984,539.96742 C135.52373,538.65167 94.73503,492.59991 84.20892,488.65261 C73.68281,484.70531 68.41975,413.65404 139.47102,433.3905 Z" id="Shape" fill="#D0CDE1"></path>
                      <path d="M202.77793,485.43431 L247.36369,549.49352 L351.30906,636.33395 C351.30906,636.33395 447.35986,658.70195 434.20221,674.49112 C421.04456,690.28029 340.78295,658.70195 340.78295,658.70195 C340.78295,658.70195 221.0484,571.86151 217.10111,565.28268 C213.15382,558.70385 169.7336,496.86295 169.7336,496.86295 L202.77793,485.43431 Z" id="Shape"></path>
                      {/* Animations */}
                      <circle id="Oval" fill="#F2F2F2" cx="498.06371" cy="237.45791" r="65"></circle>
                      <path id="Shape" d="M1034.92966 152.04061 670.68098 152.04061 670.68098 75.82117 1034.92966 75.82117z" stroke="#3F3C57" stroke-width="2"></path>
                      <rect id="Rectangle-path" fill="#8D7AE7" x="645.80936" y="92.06506" width="362.64407" height="74.61482"></rect>
                      <circle id="Oval" fill="#6C63FF" cx="416.56486" cy="15.24386" r="5.61624"></circle>
                      <circle id="Oval" fill="#6C63FF" cx="435.8203" cy="15.24386" r="5.61624"></circle>
                      <circle id="Oval" fill="#6C63FF" cx="455.07573" cy="15.24386" r="5.61624"></circle>
                      <path id="Shape" d="M402.12341 437.0612 1074.4591 437.0612 1074.4591 0.60462 402.12341 0.60462z" stroke-width="2" stroke="#3f3c57"></path>
                      <path d="M402.5,24.5 L1074.5,24.5" id="Line" stroke-width="2" stroke="#3f3c57"></path>
                      <path d="M418.16961,18.25544 C414.624781,18.25544 411.75113,15.3817886 411.75113,11.83696 C411.75113,8.29213138 414.624781,5.41848 418.16961,5.41848 C421.714439,5.41848 424.58809,8.29213138 424.58809,11.83696 C424.58399,15.380089 421.712739,18.2513401 418.16961,18.25544 Z" id="Shape" stroke-width="2" stroke="#3f3c57"></path>
                      <path d="M437.42505,18.25544 C433.880221,18.25544 431.00657,15.3817886 431.00657,11.83696 C431.00657,8.29213138 433.880221,5.41848 437.42505,5.41848 C440.969879,5.41848 443.84353,8.29213138 443.84353,11.83696 C443.83943,15.380089 440.968179,18.2513401 437.42505,18.25544 Z" id="Shape" stroke-width="2" stroke="#3f3c57"></path>
                      <path d="M456.68049,18.25544 C453.135661,18.2554455 450.262006,15.3817986 450.262,11.83697 C450.261994,8.29214138 453.135641,5.41848552 456.68047,5.41848 C460.225299,5.41847448 463.098954,8.29212138 463.09896,11.83695 C463.09486,15.3800767 460.223617,18.2513291 456.68049,18.25544 Z" id="Shape" stroke-width="2" stroke="#3f3c57"></path>
                      <path d="M613.5,24.5 L613.5,437.5" id="Line-2" stroke-width="2" stroke="#3f3c57"></path>
                      <rect id="Rectangle-path" fill="#F2F2F2" x="688.73293" y="228.85889" width="117.93955" height="16.0462"></rect>
                      <rect id="Rectangle-path" fill="#F2F2F2" x="874.06652" y="228.85889" width="117.93955" height="16.0462"></rect>
                      <path id="Shape" d="M695.95374 235.07968 812.28867 235.07968 812.28867 220.6381 695.95374 220.6381z" stroke-width="2" stroke="#3f3c57"></path>
                      <rect id="Rectangle-path" fill="#F2F2F2" x="688.73293" y="353.21693" width="117.93955" height="16.0462"></rect>
                      <path id="Shape" d="M813.89329 361.04233 694.34912 361.04233 694.34912 343.39152 813.89329 343.39152z" stroke-width="2" stroke="#3f3c57"></path>
                      <rect id="Rectangle-path" fill="#F2F2F2" x="689.13409" y="289.43329" width="303.27314" height="16.0462"></rect>
                      <path id="Shape" d="M999.62803 298.86332 694.75027 298.86332 694.75027 281.2125 999.62803 281.2125z" stroke-width="2" stroke="#3f3c57"></path>
                      <path id="Shape" d="M999.22686 236.6843 879.6827 236.6843 879.6827 219.03348 999.22686 219.03348z" stroke-width="2" stroke="#3f3c57"></path>
                      <path d="M509.06372,285.45795 C472.612927,285.45795 443.06372,255.908743 443.06372,219.45795 C443.06372,183.007157 472.612927,153.45795 509.06372,153.45795 C545.514513,153.45795 575.06372,183.007157 575.06372,219.45795 C575.022564,255.891683 545.497453,285.416794 509.06372,285.45795 Z" id="Shape" stroke-width="2" stroke="#3F3C57"></path>
                      <path d="M749.5,744.5 L1030.5,744.5" id="Line-3" stroke-width="2" stroke="#3F3C57"></path>
                    </g>
                  </g>
                </svg>
                </VectorImage>
              </SvgLines>
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
