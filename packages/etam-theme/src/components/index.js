import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/new_header";
import List from "./list";
import Post from "./posts/post";
import Page from "./pages/page";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Footer from "../../../labre-theme/src/components/footer/footer";
import FontFace from "./styles/font-face";
import useScript from "./handlers/useScript";
import HomePage from "./pages/homepage";


// import antdGlobalStyles from 'antd/dist/antd.css'; 
import bootstrapGlobalStyles from 'bootstrap/dist/css/bootstrap.min.css';

import globalStyles from "./styles/globalStyles";



import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";



import Container from 'react-bootstrap/Container';
import { Helmet } from "react-helmet";


/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state, props }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // useScript("https://raw.githubusercontent.com/fauzanebd/autocheck-radio-button/main/jqThemes.js");

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      {/* <Global styles={antdGlobalStyles} /> */}
      <Global styles={bootstrapGlobalStyles} />
      <Global styles={globalStyles} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      {/* <FontFace /> */} 

      {/* Add the header of the site. */}
      <Header />
      

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      
      <Switch>
        <Loading when={data.isFetching} />
        <List when={data.isArchive} />
        <HomePage when={data.link === "/beranda/" || data.isHome} />
        <Page when={data.isPage} />
        <Post when={data.isPostType} />
        <PageError when={data.isError} />
      </Switch>

      
      <FooterContainer>
        <Footer />
      </FooterContainer>

    </>

    
  );
};

export default connect(Theme);

// const globalStyles = css`
//   body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//       "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
//   }
//   a,
//   a:visited {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

const HeadContainer = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    background-color: rgba(240, 240, 244, .4);
    height: 4.5rem;
    position: fixed;
    width: 100%;
    z-index: 99;
    webkit-box-shadow: 0 0 26px -7px rgba(57, 63, 72, 0.36) !important;
    box-shadow: 0 0 26px -7px rgba(57, 63, 72, 0.36) !important;
/*
  display: flex;
  align-items: center;
  flex-direction: ;
  background-color: #1f38c5;
  */
`;


const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;

const FooterContainer = styled.div`
  background-color: rgba(240, 240, 244, .3);
  border-top: 2px solid #bbb;
  margin: 0;
`;
