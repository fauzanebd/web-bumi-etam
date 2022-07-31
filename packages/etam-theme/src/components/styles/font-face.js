// src/components/styles/font-face.js
import React from "react";
import { css, Global } from "frontity";

// import SourceSansProBold from "../fonts/source-sans-pro-latin-700.woff2";
// import PtSansNarrow from "../fonts/pt-sans-narrow-latin-regular.woff2";
// import PtSerif from "../fonts/pt-serif-latin-regular.woff2";
// import PtSerifItalic from "../fonts/pt-serif-latin-italic.woff2";



const FontFace = () => (
  <Global
     styles={css`
     /* rubik-regular - latin */
     @font-face {
       font-family: 'Rubik';
       font-style: normal;
       font-weight: 400;
       src: url('../fonts/rubik-v21-latin-regular.eot'); /* IE9 Compat Modes */
       src: local(''),
            url('../fonts/rubik-v21-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('../fonts/rubik-v21-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('../fonts/rubik-v21-latin-regular.woff') format('woff'), /* Modern Browsers */
            url('../fonts/rubik-v21-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('../fonts/rubik-v21-latin-regular.svg#Rubik') format('svg'); /* Legacy iOS */
     }
     /* rubik-700 - latin */
     @font-face {
       font-family: 'Rubik';
       font-style: normal;
       font-weight: 700;
       src: url('../fonts/rubik-v21-latin-700.eot'); /* IE9 Compat Modes */
       src: local(''),
            url('../fonts/rubik-v21-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('../fonts/rubik-v21-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
            url('../fonts/rubik-v21-latin-700.woff') format('woff'), /* Modern Browsers */
            url('../fonts/rubik-v21-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
            url('../fonts/rubik-v21-latin-700.svg#Rubik') format('svg'); /* Legacy iOS */
     }
     /* rubik-800 - latin */
     @font-face {
       font-family: 'Rubik';
       font-style: normal;
       font-weight: 800;
       src: url('../fonts/rubik-v21-latin-800.eot'); /* IE9 Compat Modes */
       src: local(''),
            url('../fonts/rubik-v21-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('../fonts/rubik-v21-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
            url('../fonts/rubik-v21-latin-800.woff') format('woff'), /* Modern Browsers */
            url('../fonts/rubik-v21-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
            url('../fonts/rubik-v21-latin-800.svg#Rubik') format('svg'); /* Legacy iOS */
     }
     /* rubik-italic - latin */
     @font-face {
       font-family: 'Rubik';
       font-style: italic;
       font-weight: 400;
       src: url('../fonts/rubik-v21-latin-italic.eot'); /* IE9 Compat Modes */
       src: local(''),
            url('../fonts/rubik-v21-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('../fonts/rubik-v21-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
            url('../fonts/rubik-v21-latin-italic.woff') format('woff'), /* Modern Browsers */
            url('../fonts/rubik-v21-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
            url('../fonts/rubik-v21-latin-italic.svg#Rubik') format('svg'); /* Legacy iOS */
     }
     /* rubik-700italic - latin */
     @font-face {
       font-family: 'Rubik';
       font-style: italic;
       font-weight: 700;
       src: url('../fonts/rubik-v21-latin-700italic.eot'); /* IE9 Compat Modes */
       src: local(''),
            url('../fonts/rubik-v21-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('../fonts/rubik-v21-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
            url('../fonts/rubik-v21-latin-700italic.woff') format('woff'), /* Modern Browsers */
            url('../fonts/rubik-v21-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
            url('../fonts/rubik-v21-latin-700italic.svg#Rubik') format('svg'); /* Legacy iOS */
     }
     /* rubik-800italic - latin */
     @font-face {
       font-family: 'Rubik';
       font-style: italic;
       font-weight: 800;
       src: url('../fonts/rubik-v21-latin-800italic.eot'); /* IE9 Compat Modes */
       src: local(''),
            url('../fonts/rubik-v21-latin-800italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('../fonts/rubik-v21-latin-800italic.woff2') format('woff2'), /* Super Modern Browsers */
            url('../fonts/rubik-v21-latin-800italic.woff') format('woff'), /* Modern Browsers */
            url('../fonts/rubik-v21-latin-800italic.ttf') format('truetype'), /* Safari, Android, iOS */
            url('../fonts/rubik-v21-latin-800italic.svg#Rubik') format('svg'); /* Legacy iOS */
     }
    `
    }
  />
);

export default FontFace;
