// src/components/styles/globalStyles.js
import { css } from "frontity";

const settings = css`
  :root {
    --system-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --code-family: Menlo, 'Roboto Mono', Courier New, monospace;

    --header-family: 'Rubik', var(--system-family);
    --body-family: 'Rubik', var(--system-family);
    --meta-family: 'Rubik', var(--system-family);
    --body-background: #f7f7f7;
    --header-color: #404040;
    --background-footer: #e6e6e6;
    --button-background: #5183f5;
   
    --color-brand: #3291f1;
    --color-brand-light: #b1eaf5;
    --color-text: #414141;
    --color-text-medium: rgba(96,101,108,0);
    --color-text-light: rgb(184, 185, 188);
    --color-border: #e1e5e8;

    --color-link: #414141;
    --color-link-darker: #364fc7;
    
    --wide-container: clamp(16rem, 90vw, 80rem);
    --normal-container: clamp(16rem, 90vw, 58rem);
  }
`;

const cssReset = css`
/* Modern CSS Reset by Andy Bell. https://hankchizljaw.com/wrote/a-modern-css-reset/ */

    /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    /* Remove default padding */
    ul[class],
    ol[class] {
      padding: 0;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    /* Set core body defaults */
    body {
      min-height: 100vh;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
    }

    /* Remove list styles on ul, ol elements with a class attribute */
    ul[class],
    ol[class] {
      list-style: none;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    /* Remove all animations and transitions for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
`;

// const documentSetup = (colors) => css`
//     html, body {
//         background: var(--body-background);
//         box-sizing: border-box;
//         color: var(--color-text);
//         font-family: var(--body-family);
//         font-size: clamp(1.05rem, .9rem + 0.25vw, 1.25rem); 
//         letter-spacing: -0.015em;
//         text-align: left;
//     }
//     *,
//     *::before,
//     *::after {
//         box-sizing: inherit;
//         -webkit-font-smoothing: antialiased;
//         word-break: break-word;
//         word-wrap: break-word;
//     }

//     #site-content {
//         overflow: hidden;
//     }
// `;

const documentSetup = (colors) => css`
    html, body {
      font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        word-break: break-word;
        word-wrap: break-word;
    }

    #site-content {
        overflow: hidden;
    }
`;

const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;

// const elementBase = (colors) => css`
//     main {
//         display: block;
//     }

//     h1,
//     h2,
//     h3,
//     h4,
//     h5,
//     h6 {
//         margin: 1rem 0;
//         font-weight: 600;
//         font-family: var(--header-family);
//         line-height: 1.25;
//         letter-spacing: -0.0415625em;
//         color: var(--header-color);
//     }
    
//     h1 {
//         font-size: clamp(1.5rem, 1.5rem + 3vw, 4rem);
//         font-weight: 700;
//         line-height: 1.1;
//     }

//     h2 {
//         font-size: clamp(1.5rem, 1.5rem + 2.5vw, 3rem);
//       }
//     h3 {
//         font-size: clamp(1.5rem, 1.5rem + 1vw, 2.75rem);
//     }
//     h4 {
//        font-size: clamp(1.5rem, 1.5rem + .75vw, 2rem);
//     }
//     H5 {
//         font-size: clamp(1.5rem, 1.5rem + .33vw, 1.5rem);
//     }

//     h6 {
//         font-size: clamp(1.25rem, 1.25rem + .125vw, 1.125rem);
//         letter-spacing: 0.03125em;
//         text-transform: uppercase;
//     }

//     p {
//         line-height: 1.5;
//         padding-bottom: 1em;
//     }

//     em,
//     i,
//     q,
//     dfn {
//         font-style: italic;
//     }

//     em em,
//     em i,
//     i em,
//     i i,
//     cite em,
//     cite i {
//         font-weight: bolder;
//     }

//     big {
//         font-size: 1.2em;
//     }

//     small {
//         font-size: 0.75em;
//     }

//     b,
//     strong {
//         font-weight: 700;
//     }

//     ins {
//         text-decoration: underline;
//     }

//     sub,
//     sup {
//         font-size: 75%;
//         line-height: 0;
//         position: relative;
//         vertical-align: baseline;
//     }

//     sup {
//         top: -0.5em;
//     }

//     sub {
//         bottom: -0.25em;
//     }

//     abbr,
//     acronym {
//         cursor: help;
//     }

//     address {
//         line-height: 1.5;
//         margin: 0 0 2rem 0;
//     }

//     hr {
//         border-style: solid;
//         border-width: 0.1rem 0 0 0;
//         border-color: #DCD7CA;
//         margin: 4rem 0;
//     }
  
//     a {
//         color: black;
//         text-decoration: none;
//     }
    
//     a:hover  {
//         color: var(--color-link);
//     } 


//     // Navbar css dari templet
//     .navbar-toggleable-md .navbar-nav .nav-link {
//       margin-left: 1rem;
//       font-weight: 500;
//       color: #333;
//       text-transform: uppercase;
//       letter-spacing: 1px;
//       font-size: 0.94em;        
//     }

//     .navbar-toggleable-md .navbar-nav .nav-link.highlight {
//       background: #6FD350;
//       color: #fff;
//       border-radius: 4px;
//       box-shadow: 0 6px 10px 0 rgba(0,0,0,0.1);
//           padding-left: 1em;
//       padding-right: 1em;
//     }  

//     .navbar-toggler {
//       z-index:9999;
//     }

//     .navbar-toggleable-md .navbar-nav .nav-link {
//       margin-left: 1rem;
//       font-weight: 500;
//       color: #333;
//       text-transform: uppercase;
//       letter-spacing: 1px;
//       font-size: 0.94em;
//   }
//   .mediumnavigation .dropdown-menu {
//           margin:0 0 15px 0;
//           box-shadow:none;
//           border:0;
//       }
//   @media (min-width:992px) {    
//       .mediumnavigation .dropdown-menu {
//           border:0;
//           box-shadow: 0px 10px 40px 0px rgba( 0, 0, 0, 0.05 );
//           margin:15px 0;
//       }
  
//   }
    
// `;

const elementBase = (colors) => css`

    .mainheading {
      padding: 0rem 0rem 1rem 0;
    }

    a {
      color:#000;
      text-decoration:none;
    }
    a,a:hover {
      transition:all 0.2s;
      text-decoration:none;
    }
    pre {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0 0 1.75em 0;
        border: #E3EDF3 1px solid;
        width: 100%;
        padding: 10px;
        font-family: monospace, sans-serif;
        font-size: 14px;
        white-space: pre;
        overflow: auto;
        background: #F7FAFB;
        border-radius: 3px;
        line-height: 1.3;
    }
    .mediumnavigation {
      background: #fff;
            transition: top 0.5s ease-in-out;
            padding: 1.5rem 1rem;
            box-shadow: 0px 10px 40px 0px rgba( 0, 0, 0, 0.05 );
    }
    .nav-up {box-shadow:none;}

    .site-content {
        padding-top: 3.5rem;
        margin-top: 57px;
        transition: all 0.4s;
    }
    section {
      margin-bottom:20px;
    }
    section.featured-posts {
        margin-bottom:30px;
    }
    section.recent-posts {
        margin-bottom:0;
    }

    .row {
      margin:0px;
    }
    .section-title h2 {
      font-weight:700;
      font-size:1.4rem;
      margin-bottom:27px;
        position: relative;
    }
    .section-title h2:before {
        margin-bottom: 0;
        position: absolute;
        z-index: 1;
        left: 15px;
        right: 0px;
        top: 12px;
        height: 1px;
        content: '';
        background-color: #f5f5f5;
    }

    .section-title span {
        background-color: #fff;
        position: relative;
        z-index: 2;
        display: inline-block;
        padding: 0px 15px 0 0;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .layout-page  .section-title span {
        font-size: 2rem;
        text-transform: none;
        letter-spacing:0;
    }
    .layout-page .section-title h2:before {top:17px;}
    .article-post ol, .article-post ul { margin-bottom:1.5rem;}
    .article-post ol ol, .article-post ul ul {   
        list-style: disc;
        margin-bottom:0rem;
    }
    .prevnextlinks .thepostlink {
        padding: 20px 0;
        font-size: 17px;
        display: block;
            color: #111;
        font-weight: 500;
    }
    .prevnextlinks {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        margin-left: 0;
        margin-right: 0;
    }
    .prevnextlinks .rightborder {
        border-right: 1px solid #eee;
    }
    .navbar-toggleable-md .navbar-nav .nav-link {
        margin-left: 1rem;
        font-weight: 500;
        color: #333;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.94em;        
      }
    .navbar-toggleable-md .navbar-nav .nav-link.highlight {
        background: #6FD350;
        color: #fff;
        border-radius: 4px;
        box-shadow: 0 6px 10px 0 rgba(0,0,0,0.1);
            padding-left: 1em;
        padding-right: 1em;
        
    }
    .navbar-toggler {
        z-index:9999;
    }



    .navbar-toggleable-md .navbar-nav .nav-link {
        margin-left: 1rem;
        font-weight: 500;
        color: #333;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.94em;
    }
    .mediumnavigation .dropdown-menu {
            margin:0 0 15px 0;
            box-shadow:none;
            border:0;
        }
    @media (min-width:992px) {    
        .mediumnavigation .dropdown-menu {
            border:0;
            box-shadow: 0px 10px 40px 0px rgba( 0, 0, 0, 0.05 );
            margin:15px 0;
        }

    }
    @media (min-width:576px) {
      .card-columns .listfeaturedtag {
        -webkit-column-count:2;
        -moz-column-count:2;
        column-count:2;
      }
    }
    .card-columns .card {
      margin-bottom:20px;
    }
    .listfeaturedtag .wrapthumbnail {
      height:258px;
      flex:0 0 auto;
    }
    .listfeaturedtag .card {
      border-radius:5px;
      height:260px;
      padding-left:0;
      margin-bottom:15px;
    }
    .listfeaturedtag .thumbnail {
      background-size:cover;
      height:100%;
      display:block;
      background-position:38% 22% !important;
      background-origin:border-box!important;
      border-top-left-radius:2px;
    }
    .listfeaturedtag .card-block {
      padding-left:0;
    }
    .listfeaturedtag h2.card-title,.listrecent h2.card-title {
      font-size:1.3rem;
      font-weight:500;
      line-height: 1.25;
    }
    .listfeaturedtag h2.card-title a,.listrecent h2.card-title a {
      color: #111;    
        font-weight:500;
    }
    .listfeaturedtag h2.card-title a:hover,.listrecent h2.card-title a:hover {
      color:rgba(0,0,0,.6);
      text-decoration:none;
    }
    .listfeaturedtag h4.card-text,.listrecent h4.card-text {
        color: #666;
        font-size: 0.95rem;
        line-height: 1.8;
        font-weight: 400;
    }
    .listfeaturedtag .wrapfooter {
      position:absolute;
      bottom:20px;
      font-size:12px;
      display:block;
      width:85%;
    }
    .listrecent .wrapfooter {
      font-size:12px;
      margin-top:30px;
    }
    .author-thumb {
      width:40px;
      height:40px;
      float:left;
      margin-right:13px;
      border-radius:100%;
    }
    .post-top-meta {
      margin-bottom: 1rem;
        margin-top: 3rem;
    }
    .post-top-meta .author-thumb {
      width:72px;
      height:72px;
    }
    .post-top-meta.authorpage .author-thumb {
      margin-top:40px;
    }
    .post-top-meta span {
      font-size:0.9rem;
      color:rgba(0,0,0,.44);
      display:inline-block;
    }
    .post-top-meta .author-description {
      margin-bottom:5px;
      margin-top:10px;
      font-size:0.95rem;
    }
    .author-meta {
      flex:1 1 auto;
      white-space:nowrap!important;
      text-overflow:ellipsis!important;
      overflow:hidden!important;
    }
    span.post-name,span.post-date,span.author-meta {
      display:inline-block;
    }
    span.post-date,span.post-read {
      color:rgba(0,0,0,.44);
    }

    span.post-read-more a {
      color:rgba(0,0,0,.44);
        align-items: center;
        display: inline-block;
        float: right;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #d0d0d0;
        border-radius: 50%;
    }
    span.post-name a,span.post-read-more a:hover {
      color:rgba(0,0,0,.8);
    }
    .dot:after {
      content:"·";
      margin-left:3px;
      margin-right:3px;
    }
    .mediumnavigation .form-control {
      font-size:0.8rem;
      border-radius:30px;
      overflow:hidden;
      border:1px solid rgba(0,0,0,0.04);
    }

    .mediumnavigation .form-inline {
      margin-left:15px;
    }
    .mediumnavigation .form-inline .btn {
      margin-left:-50px;
      border:0;
      border-radius:30px;
      cursor:pointer;
    }
    .mediumnavigation .form-inline .btn:hover,.mediumnavigation .form-inline .btn:active {
      background:transparent;
      color:green;
    }
    .mediumnavigation .navbar-brand {
      font-weight:500;
            padding: 0;
    }

    .dropdown-item {
        display: block;
        width: 100%;
        padding: 7px 1.5rem;
    }
    .mediumnavigation .nav-item,.dropdown-menu {
      font-size:0.9rem;
    }
    .mediumnavigation .search-icon {
      margin-left:-40px;
      display:inline-block;
      margin-top:3px;
      cursor:pointer;
    }
    .mediumnavigation .navbar-brand img {
      margin-right:7px;
        vertical-align: text-bottom;
        max-width:initial;
    }
    .mainheading h1.sitetitle {
      font-family:Georgia;
    }
    .mainheading h1.posttitle {
      font-weight:700;
      margin-bottom:1rem;
    }
    .intro {
        background-image:url(../images/head.jpg);
        background-size:cover;
        padding: 9rem 0;
        margin-top:-87px;
        margin-bottom:3.5rem;
        z-index: 1;
        position: relative;
    }
    .intro .btn {
        background: #fff100;
        border: 0;
        color: #333;
        border-radius: 3px;
        font-weight: 500;
        padding: 15px 40px;
        box-shadow: 0 6px 10px 0 rgba(0,0,0,0.1);
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 1px;
    }
    .intro h1 {
        font-weight:700;
    }
    .intro h2 {
        margin-top: 2rem;
        margin-bottom: 2rem;
        color: #888;
        line-height: 1.6;
    }
    .wrapintro {
        background: #fff;
        width: 700px;
        padding: 3rem;
        max-width: 90%;
        margin: 0px auto;
        text-align: center;
    }
    .footer {
      border-top:1px solid rgba(0,0,0,.05)!important;
      color:#999;
      margin-top:50px;
        margin-bottom:0px;
        background-color: #171e27;
        padding: 30px 0px 30px 0;
    }
    .footersocial i {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: inline-block;
        background: #ffffff;
        border-radius: 3px;
        box-shadow: 0 6px 10px 0 rgba(0,0,0,0.1);
        font-size: 18px;
        margin-left: 5px;
        color: #3c3838;
        margin-top: 10px;
    }
    .beforefooter {
        background: #fff100;
        color: #111;
        padding: 50px 0;
        max-width: 100%;
        margin: 0px auto;
        margin-bottom: -50px; margin-top:50px;
    }
    .footer a {color:inherit;}
    .footer a:hover {color:#fff; text-decoration:none;}
    .footer-widget {margin-bottom: 3rem;    margin-top: 3rem;font-size:15px;}
    .footer-widget h5.title {font-size:18px; text-transform:uppercase;letter-spacing:1px;color:#fff;margin-bottom:1.5rem;}
    .footer-widget ul {list-style:none;padding-left:0;}
    .footer-widget ul li {margin:12px 0;}
    .footer-widget .recent-posts img {float:left;margin-right:10px;}
    .footer .textwidget a {    border-bottom: 1px dashed;}
    .beforefooter h3 {margin-bottom:1rem;}
    .copyright {  padding-top: 1.5rem; font-size:0.9em; }
    .copyright a {color:#eee;}
    .copyright a:hover {text-decoration:none;color:#fff;}
    .link-dark {
      color:rgba(0,0,0,.8);
    }
    .article-post {
      font-size:1.1rem;
      line-height:1.8;
      color:rgba(0,0,0,.8);
    }
    .article-post a {color:inherit; box-shadow:inset 0 -2px 0 rgba(255, 229, 31,1), 0 2px 0 rgba(255, 229, 31,1);}
    .article-post a:hover {box-shadow:inset 0 -30px 0 rgba(255, 229, 31,1), 0 2px 0 rgba(255, 229, 31,1);text-decoration:none;}
    blockquote {
      border-left:4px solid #6FD350;
      padding:0 20px;
      font-style:italic;
      color:rgba(0,0,0,.5);
    }
    .article-post p,.article-post blockquote {
      margin:0 0 1.5rem 0;
    }
    .featured-image {
        display: block;
        margin-bottom: 2rem;
        box-shadow: 0 6px 10px 0 rgba(0,0,0,0.1);
    }
    .article-post img, .article-post iframe {
        box-shadow:0 6px 10px 0 rgba(0,0,0,0.1);
    }
    .article-post p img, .article-post p iframe {
        margin-bottom:0.5rem;
    }
    .share {
      text-align:center;
    }
    .share p {
      margin-bottom:10px;
      font-size:0.95rem;
    }
    .share {
      display:none;
    }
    .share ul li {
      display:inline-block;
      margin-bottom:9px;
    }
    .share ul {
      padding-left:0;
      margin-left:0;
    }
    .share ul li i.fa {border:1px solid #ddd; width:30px; height:30px; line-height:30px;text-align:center;border-radius:50%;}
    .svgIcon {
      vertical-align:middle;
    }


    @media (max-width:999px) {
      .listfeaturedtag .wrapthumbnail, .listfeaturedtag .col-md-7 {
        width:100%;
        max-width:100%;
        -webkit-box-flex: 0;
        -webkit-flex: 100%;
        -ms-flex: 100%;
        flex: 100%;
      }
      .listfeaturedtag .wrapthumbnail {
        height:250px;
      }
      .listfeaturedtag .card {
        height:auto;
      }
      .listfeaturedtag .wrapfooter {
        position:relative;
        margin-top:30px;
      }
      .listfeaturedtag .card-block {
        padding:20px;
      }
    }
    @media (max-width:1024px) {
      .post-top-meta .col-md-10 {
        text-align:center;
      }
    }
    @media (max-width:767px) {
      .post-top-meta.authorpage {
        text-align:center;
      }
    }
    .share,.share a {
      color:rgba(0,0,0,.44);
      fill:rgba(0,0,0,.44);
    }
    .graybg {
      background-color:#fafafa;
      padding:40px 0 46px;
      position:relative;
    }
    .listrelated .card {
      box-shadow:0 1px 7px rgba(0,0,0,.05);
      border:0;
    }
    .card {
      border-radius: 4px;
      margin-bottom: 30px;
      box-shadow:0 0px 2px 2 rgba(0, 0, 0, 0.14);
      border:0;
    }
    .card .img-thumb {
      border-top-right-radius:4px;
      border-top-left-radius:4px;
    }
    ul.tags {
      list-style:none;
      padding-left:0;
      margin: 0 0 1.5rem 0;
    }
    ul.tags li {
      display:inline-block;
      font-size:0.9rem;
    }
    ul.tags li a {
        background: #fff100;
        color: #333;
        padding: 3px 10px;
        border-radius: 3px;
        font-weight: 500;
        font-size: 0.93em;
        text-transform: capitalize;    
        box-shadow: 0 6px 10px 0 rgba(169, 169, 169, 0.1);
    }
    ul.tags li a:hover {
      background:rgba(0,0,0,.07);
      text-decoration:none;
    }
    .margtop3rem {
      margin-top: 3rem;
    }
    .sep {
      height:1px;
      width:20px;
      background:#999;
      margin:0px auto;
      margin-bottom:1.2rem;
    }
    .btn {
        box-shadow: 0 6px 10px 0 rgba(0,0,0,0.1);
        font-weight:500;
        font-size:15px;
        border-radius: .3rem;
        color:#fff;
        cursor: pointer;
    }
    a.btn {color:#fff;}

    .btn-group-lg>.btn, .btn-lg {
        padding: 1rem 2rem;
        border-radius: .3rem;
        font-size:15px;
    }
    .btn-primary {
        background-color: #675bff;
        border-color: #675bff;
    }
    .btn.follow {
      border-color:#6FD350;
      color:#6FD350;
      padding:3px 10px;
      text-align:center;
      border-radius:999em;
      font-size:0.85rem;
      display:inline-block;
            box-shadow: none;
        font-weight:400;
    }
    .btn.subscribe {
      background-color:#1C9963;
      border-color:#1C9963;
      color:rgba(255,255,255,1);
      fill:rgba(255,255,255,1);
      border-radius:30px;
      font-size:0.85rem;
      margin-left:10px;
      font-weight:600;
      text-transform:uppercase;
    }
    .post-top-meta .btn.follow {
      margin-left:5px;
      margin-top:-4px;
    }
    .alertbar {
      box-shadow:0 -3px 10px 0 rgba(0,0,0,.0785);
      position:fixed;
      bottom:0;
      left:0;
      background-color:#fff;
      width:100%;
      padding:14px 0;
      z-index:1;
        display: none;
    }
    .alertbar form {display: inline-block;}
    .alertbar input[type="email"] {
      font-size:0.85rem;
      padding:3px 5px 3px 10px;
      border-top-left-radius:3px;
      border-bottom-left-radius:3px;
      border:1px solid #ddd;
      border-right:0;
      margin-right:-10px;
      height:34px;
      letter-spacing:0.5px;
      margin-left:5px;
    }
    .alertbar input[type="submit"] {
      background-color:#1C9963;
      border:1px solid #1C9963;
      color:rgba(255,255,255,1);
      fill:rgba(255,255,255,1);
      font-size:0.85rem;
      border-radius:0;
      padding:4px 10px;
      border-top-right-radius:3px;
      border-bottom-right-radius:3px;
      font-weight:600;
      height:34px;
      letter-spacing:0.5px;
        cursor: pointer;
    }
    .form-control::-webkit-input-placeholder {
      color: rgba(0,0,0,.5);
    }
    .form-control:-moz-placeholder {
      color: rgba(0,0,0,.5);
    }
    .form-control::-moz-placeholder {
      color: rgba(0,0,0,.5);
    }
    .form-control:-ms-input-placeholder {
      color: rgba(0,0,0,.5);
    }
    .form-control::-ms-input-placeholder {
      color: rgba(0,0,0,.5);
    }
    .form-control {border:1px solid #eee; border-radius:0;}
    .authorpage h1 {
      font-weight:700;
      font-size:30px;
    }
    .post-top-meta.authorpage .author-thumb {
      float:none;
    }
    .authorpage .author-description {
      font-size:1rem;
      color:rgba(0,0,0,.6);
    }
    .post-top-meta.authorpage .btn.follow {
      padding:7px 20px;
      margin-top:10px;
      margin-left:0;
      font-size:0.9rem;
    }
    .graybg.authorpage {
      border-top:1px solid #f0f0f0;
    }
    .authorpostbox {
      width:760px;
      margin:0px auto;
      margin-bottom:1.5rem;
      max-width:100%;
    }
    .authorpostbox .img-thumb {
      width:100%;
    }
    .sociallinks {
      margin:1rem 0;
    }
    .sociallinks a {
      background:#666;
      color:#fff;
      width:22px;
      height:22px;
      display:inline-block;
      text-align:center;
      line-height:22px;
      border-radius:50%;
      font-size:12px;
    }
    #comments {
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }
    .sidebar {max-width:340px;font-size: 15px;}
    .sidebar h5 {    margin-bottom: 1rem;   text-align:center; position:relative;font-weight: 700; }
    .sidebar h5 span {
    background-color: #fff;
        position: relative;
        z-index: 2;
        display: inline-block;
        padding: 0px 15px 0 15px;
        text-align: center;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .sidebar h5:before {
        margin-bottom: 0;
        position: absolute;
        z-index: 1;
        left: 0px;
        top: 12px;
        width: 100%;
        height: 1px;
        content: '';
        background-color: #333333;
    }
    .sidebar ul {list-style:none;padding-left:0;}
    .sidebar ul li a {
        color: #999;
        border-bottom: 1px solid #f6f6f6;
        display: block;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    .sidebar-section {     margin-bottom: 2rem;
        box-shadow: 0 0px 1px 0 rgba(0,0,0,0.1);
        box-shadow:0 0px 1px 0 rgba(0, 0, 0, 0.14);
        padding: 30px;}
    .sidebar #mc_embed_signup form {
        padding: 0 !Important;
    }
    .sidebar #mc_embed_signup .button {
        width: 100% !Important;
        background: #675bff !Important;
        height: auto;
        padding: 6px 20px;
        font-weight: 600;
        box-shadow: 0 6px 10px 0 rgba(0,0,0,0.1);
    }
    .sidebar #mc_embed_signup h2 {
        font-weight: 400;
        font-size: 15px;
        color: #999;
        margin-bottom: 1rem;
        line-height: 1.5;
        text-align: center;
    }
    .sidebar #mc_embed_signup input {width:100%;}
    .sidebar #mc_embed_signup .mc-field-group {width:100% !Important;}
    #mc_embed_signup .mc-field-group input {text-indent: 5% !Important;}
    #mc_embed_signup {font-family:inherit !Important;}
    .sidebar-right .sidebar {max-width:inherit;}
    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
    }
    .article-post .h1, .article-post .h2, .article-post .h3, .article-post .h4, .article-post .h5, .article-post .h6, .article-post h1, .article-post h2, .article-post h3, .article-post h4, .article-post h5, .article-post h6 {
        font-weight: 500;
        margin-bottom: 1.5rem;
    }
    .article-post img.shadow {
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.30);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.30);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.30);
    }
    img {max-width:100%;height: auto;}
    .bottompagination span.navigation {

    }
    .bottompagination span.navigation a {
      background: #fff100;
        color: #333;
        padding: 5px;
        border-radius: 3px;
        text-transform: none;
        font-weight: 500;
        letter-spacing: 0;
        min-width: 100px;
        display: inline-block;
    }
    .pointerup {
      margin-bottom:-18px;
      margin-left:49%;
      font-size:30px;
    }
    .pointerup i.fa {
      color:#eaeaea;
    }
    .bottompagination .navigation i {
      display:inline-block;
    }
    .bottompagination .navigation {
        display: block;
        font-size: 0.93rem;
        font-weight: 700;
        text-align:center;
        position:relative;
    }
    .bottompagination .navigation:before {
        margin-bottom: 0;
        position: absolute;
        z-index: 1;
        left: 0px;
        right: 0px;
        top: 12px;
        height: 1px;
        content: '';
        background-color: #eee;
    }
    .pagination {
        display: inline-block;
        background: #fff;
        z-index: 1;
        position: relative;
        padding: 0 20px;
        font-size: 13px;
        letter-spacing: 0.5px;
        font-weight: 500;
        text-transform: uppercase;
    }
    iframe {
        max-width:100%;
    }

    @media (max-width: 1199px) {
        .container {
            width: 96%;
            max-width: 100%;
        }
    }
    @media (max-width: 991px) {
        .navbar-toggleable-md .navbar-nav .nav-link {
            margin-left: 0;
            margin-top: 10px;
        }
        .intro {padding:3rem 0;}
        .wrapintro {padding: 2rem 1rem;}
        .intro h2 {margin-top: 1rem;   margin-bottom: 1rem;}
    }
    @media (max-width: 575px) {
        .footer {text-align:center;}
        .footer-widget {
            margin-bottom: 1rem;
            margin-top: 1rem;
        }
        .sidebar {max-width:100%;}
        .copyright .pull-left, .copyright .pull-right {float:none;}
        .beforefooter {text-align:center;}
        .beforefooter .footersocial { text-align: center !important;    margin-top: 1rem; }    
        .form-group .col-md-6:first-child {margin-bottom: 1rem;}
    }
`


/* add other styles later */
const globalStyles = (colors) =>
  css([
    cssReset,
    settings,
    documentSetup(colors),
    accessibilitySettings,
    elementBase(colors),
   // listStyle,
   // quoteStyle(colors),
   // codeStyle(colors),
  //  mediaStyle(colors),
   // tableStyles(colors),
  ]);

export default globalStyles;