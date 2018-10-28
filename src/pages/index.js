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

import '../swiper.css';
import github from '../../public/static/icons/github-logo.svg';

injectGlobal`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #434343;
  }
  html {
    font-family: Gilroy;
    background: #FFF;
    border: 0;
    margin: 0;
    font-size: 18px;
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: Gilroy;
    src: url('../../public/Gilroy-ExtraBold.otf') format("opentype");
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
    background-size: 35px 35px;
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
  
  min-height: calc(100vh - 16px);
  @media (min-width: 576px) {
    min-height: calc(100vh - 32px);
  }
`;

const Content = styled('section')`
  ${tw `sm:px-8 px-4 md:px-24`};
`;

const Intro = styled(Content)`
  ${tw `py-8 md:py-16`};
`;

const Title = styled('h1')`
  font-family: Gilroy;
  src: url('../../public/Gilroy-ExtraBold.otf') format("opentype");
  line-height: 1.2;
  // letter-spacing: -3px;
  ${('font-size: 8vw; color: #8D7AE7')};
  .nameTitle {
    color: #2C274D;
  };
  .emoji {
    display: inline-block;
    animation: rotate 2s ease-in-out infinite;
    font-size: 80%;
  };

  @keyframes rotate {
	0% { transform: rotate(0deg); }
	25% { transform: rotate(10deg); }
	50% { transform: rotate(0deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg);}
}

  @media (max-width: 576px) {
    ${('font-size: 50px')};
  }
`;

const Social = styled('section')`
  ${tw `flex flex-wrap items-center justify-center sm:justify-start mt-8'`};
`;

const Button = styled('href')`
  ${tw `cursor-pointer mx-2 my-1 py-1 px-2 md:px-8 rounded-full no-underline shadow-md focus:outline-none focus:shadow-outline`};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Email = styled(Button)`
  ${tw `text-white mx-4 my-4 sm:my-0`};
  background: #8D7AE7;
`;

const GitHub = styled(Button)`
  ${tw `text-white sm:mx-4 my-4 sm:my-0 items-center justify-center`};
  background: #685AAB;
`;

const LinkedIn = styled(Button)`
  ${tw `text-white`};
  background: #4B417C;
`;

const SliderWrapper = styled('section')`
  ${tw `sm:px-8 px-4 md:px-24`};
`;

const Item = styled('div')`
  ${tw `w-64 bg-black rounded-lg shadow-lg flex`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-15px);
  }
  height: 300px;
`;

const ItemContent = styled('div')`
  ${tw `py-8 px-6 flex flex-wrap content-between relative`};
  z-index: 10;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Top = styled('div')`
  ${tw `z-30`};
`;

const Bottom = styled('div')`
  ${tw `z-30`};
`;

const Repo = styled('href')`
  ${tw `text-white text-sm inline-block mb-4 py-1 tracking-wide no-underline opacity-75`};
  transition: all 0.4s ease-in-out;
  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    position: relative;
    top: 2px;
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    ${tw `opacity-100`};
  }
`;

const BGImage = styled('div')`
  ${tw `absolute pin rounded-lg`};
  z-index:0;
  .gatsby-image-outer-wrapper {
    position: static !important;
  }
  .gatsby-image-wrapper {
    position: static !important;
  }
  img {
    ${tw `rounded-lg`};
    opacity: 0.5 !important;
  }
`;

const ItemTitle = styled('h2')`
  ${tw `text-white text-3xl mb-4`};
`;

const Gradient = styled('div')`
  ${tw `absolute pin rounded-lg z-20`};
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.75) 100%);
`;



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
      <Page>
        <Intro>
          <Title>
            Hey,<br />
            <span className="nameTitle">I'm Bhavesh <span className="emoji" role="img" aria-label="emoji-icon">👋</span></span>
          </Title>
          <Social>
            <Email role="button" href="https://www.lekoarts.de">
              E-Mail
        </Email>
            <GitHub role="button" href="https://github.com/LeKoArts">
              {/* <img src={github} style={{ height: '17px',marginRight:'10px' }} />GitHub */}
              GitHub
        </GitHub>
            <LinkedIn role="button" href="https://twitter.com/lekoarts_de">
              LinkedIn
        </LinkedIn>
          </Social>
        </Intro>
        <SliderWrapper>
          <Title>Portfolio</Title>
          <Swiper {...params}>
        {edges.map(site => {
          const { id, title, cover, url } = site.node;
          return (
            <Item key={id}>
              <BGImage>
                <Gradient />
                <Img fluid={cover.childImageSharp.fluid.src} />
              </BGImage>
              <ItemContent>
                <Top>
                  <Repo href={url}>
                    <img src={github} alt="Arrow" aria-hidden="true" /> GitHub
                        </Repo>
                </Top>
                <Bottom>
                  <ItemTitle>{title}</ItemTitle>
                </Bottom>
              </ItemContent>
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