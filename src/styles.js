import styled, { injectGlobal } from 'react-emotion';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

/* global tw */
injectGlobal`
  @font-face {
    font-family: Gilroy;
    src: url('./fonts/Gilroy-ExtraBold.otf') format("opentype");
  }
  @font-face {
    font-family: Gilroy-Light;
    src: url('./fonts/Gilroy-Light.otf') format("opentype");
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
    font-family: Gilroy-Light;
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

export const Page = styled('div')`
	${tw`text-white p-0 m-0 bg-indigo-darker antialiased leading-normal relative`};
  background: #FFF;
  color: #2C274D;
  border: 14px solid #8D7AE7;
  min-height: calc(100vh - 16px);
  @media (min-width: 576px) {
    min-height: calc(100vh - 32px);
  }
`;

export const Header = styled('div')`
  background: #FF;
`;

export const Navbar = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem 2rem;
  align-items: center;
`
export const Links = styled.div`
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

export const Content = styled('section')`
  ${tw`sm:px-8 px-4 md:px-24`};
`;

export const Intro = styled(Content)`
  ${tw`py-8 md:py-16`};
`;

export const Title = styled('h1')`
  font-family: Gilroy;
  line-height: 1.2;
  // letter-spacing: -3px;
  ${('font-size: 5vw; color: #8D7AE7')};
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

  @media (max-width: 576px) {
    ${('font-size: 50px')};
  }
`;

export const Social = styled('section')`
  ${tw`flex flex-wrap items-center justify-center sm:justify-start mt-8'`};
`;

export const Button = styled(OutboundLink)`
  ${tw`cursor-pointer mx-2 my-1 py-1 px-2 md:px-8 rounded-lg no-underline focus:outline-none focus:shadow-outline`};
  transition: all 0.3s ease-in-out;
  &:hover {
    ${tw`shadow-md`};
    transform: translateY(-10px);
  }
`;

export const Email = styled(Button)`
  ${tw`mx-4 my-4 sm:my-0`};
  color: #2C274D;
  display: flex;
  align-items:center;
  justify-content:center;
  font-weight: 300;
`;

export const GitHub = styled(Button)`
  ${tw`sm:mx-4 my-4 sm:my-0`};
  color: #2C274D;
  display: flex;
  align-items:center;
  justify-content:center;
`;

export const LinkedIn = styled(Button)`
  ${tw`sm:mx-4 my-4 sm:my-0`};
  color: #2C274D;
  display: flex;
  align-items:center;
  justify-content:center;
`;

export const SliderWrapper = styled('section')`
  ${tw`sm:px-8 px-4 md:px-24`};
`;

export const Item = styled('div')`
  ${tw`w-64 bg-black rounded-lg flex`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    ${tw`shadow-md`};
    transform: translateY(-15px);
  }
  height: 300px;
`;

export const ItemContent = styled('div')`
  ${tw`py-8 px-6 inline-block flex-wrap content-between relative`};
  z-index: 10;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

export const Top = styled('div')`
  ${tw`z-30 flex flex-col`};
`;

export const Bottom = styled('div')`
  ${tw`z-30`};
`;

export const Repo = styled(OutboundLink)`
  ${tw`text-black text-sm mb-4 py-1 no-underline opacity-75`};
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
    ${tw`opacity-100`};
  }
`;

export const BGImage = styled('div')`
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

export const ItemTitle = styled('h2')`
  ${tw`text-3xl mb-4`};
  margin-top: 150px;
`;
