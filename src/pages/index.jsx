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
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import PenguinIco from '../penguin_fav.ico';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import designVector from '../design-vector.png'
import { Helmet } from "react-helmet"

import '../swiper.css';

import BhaveshResume from '../Resume_Bhavesh_Chowdhury.pdf'

import GilroyOTF from '../fonts/Gilroy-ExtraBold.otf';
import GilroyLightOTF from '../fonts/Gilroy-Light.otf';

import github from '../github-logo.svg';
import email from '../envelope.svg';
import linkedin from '../linkedin-logo.svg';

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

const VectorImage = styled('img')`
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

const Email = styled(Button)`
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
                <Link to="/">
                  Home
                </Link>
                <Resume href={BhaveshResume} target="_blank">View Resume</Resume>
              </Links>
            </Navbar>
          </Header>
          <Intro>
            <SocialTitle>
              <Title>
                Hey,<span className="nameTitle"> I'm Bhavesh</span>
              </Title>
              <Social>
                <Email role="button" href="mailto:bhaveshch20@gmail.com">
                  <img src={email} alt="email" style={{ height: '20px', marginRight: '10px' }} />E-Mail
              </Email>
                <GitHub role="button" href="https://github.com/bhaveshc789">
                  <img src={github} alt="github" style={{ height: '20px', marginRight: '10px' }} />GitHub
        </GitHub>
                <LinkedIn role="button" href="https://linkedin.com/in/bhavesh-chowdhury">
                  <img src={linkedin} alt="linkedin" style={{ height: '20px', marginRight: '10px' }} />LinkedIn
        </LinkedIn>
              </Social>
            </SocialTitle>
            <VectorDesign>
              <VectorImage src={designVector} alt="vector" />
            </VectorDesign>
          </Intro>
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