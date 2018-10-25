/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react'
import styled, {injectGlobal} from 'react-emotion'

injectGlobal`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #F3EEE8;
  }
  html {
    background: #F3EEE8;
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
	${tw `text-white font-sans p-0 m-0 bg-indigo-darker antialiased leading-normal relative`};
	border: 14px solid #8D7AE7;
  background: #F3EEE8 url("data:image/svg+xml,<svg width='52' height='26' viewBox='0 0 52 26' opacity='0.1' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%2316191f' fill-opacity='0.8'><path d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /></g></g></svg>");
  min-height: calc(100vh - 16px);
  @media (min-width: 576px) {
    min-height: calc(100vh - 32px);
  }
`;

const Content = styled('section')`
  ${tw `sm:px-8 px-4 md:px-24` };
`;

const Intro = styled(Content)`
  ${tw `py-8 md:py-16`};
`;

const Title = styled('h1')`
  font-family:'GothamBold';
  src: url('../../public/static/GOTHAM-BOLD.TTF') format("truetype");
  letter-spacing: -4px;
  ${('font-size: 100px; color: #8D7AE7')};
  .nameTitle {
    ${tw `text-black`};
  };
  .emoji {
    display: inline-block;
    animation: rotate 2s ease-in-out infinite;
    font-size: 80px;
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


export default () => (
	<Page>
		<Intro>
			<Title>Hey, I'm Bhavesh</Title>
		</Intro>
	</Page>
)
