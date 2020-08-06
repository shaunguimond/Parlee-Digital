import { css } from "frontity";
export default css`
  body {
    margin: 0;
  }
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  article .wp-block-image img {
    width: 100%;
  }

  article .parlee-image img {
    max-height: 425px;
    max-width: 425px;
    height: auto;
    width: 100%;
    padding: 25px;
  }

  article .parlee-image-tall img {
    max-height: auto;
    padding: 25px;
    max-width: 320px;
  }

  article .pd-sm {
    padding-right: 20px;
    padding-left: 20px;
  }

article .wpcf7 form {
  display: grid;
  width: 100%;
}

article .wpcf7 form p {
  margin: 20px 0px;
  line-height: 0.5;
}

article .wpcf7 form input[type="text"], article .wpcf7 form input[type="email"] {
  width: 100%;
  display: block;
  font-weight: bold;
  width: 100%;
  max-width: 800px;
  height: 40px;
  padding: 6px 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  background: #e2e2e2;
  font-size: 14px;
  justify-items: center;
  box-shadow: inset 2px 2px 4px 0 rgba(0,0,0,.4), inset -2px -2px 4px 0 rgba(255,255,255,.5);

 } 

 article .wpcf7 form input[type="text"]::placeholder, 
 article .wpcf7 form input[type="email"]::placeholder,
 article .wpcf7 form textarea::placeholder {
    color: #7f92b7;
    opacity: 0.95;
    font-weight: bold;
 }

 article .wpcf7 form textarea {
  width: 100%;
  display: block;
  font-weight: bold;
  max-width: 800px;
  height: 200px;
  padding: 6px 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  background: #e2e2e2;
  font-size: 14px;
  justify-items: center;
  box-shadow: inset 2px 2px 4px 0 rgba(0,0,0,.4), inset -2px -2px 4px 0 rgba(255,255,255,.5);

 } 

 article .wpcf7 form input[type="submit"] {
    background-image: linear-gradient(60deg,var(--theme-ui-colors-primary,#7f92b7),var(--theme-ui-colors-yellow,#528ec7));
    justify-items: center;
    color: white;
    border: 0px solid white;
    border-radius: 0px;
    height: 50px;
    font-weight: bold;
    font-size: 14px;
    width: 100%;
    box-shadow: 1px 1px 2px 0 rgba(0,0,0,.4), -1px -1px 2px 0 rgba(255,255,255,.5);
}

article .wpcf7 form input[type="submit"]:hover {
  cursor: pointer;
  animation-duration: 0.075s;
  animation-name: formHover;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  box-shadow: inset 1px 1px 2.5px 0 rgba(0,0,0,.2), inset -1px -1px 2.5px 0 rgba(255,255,255,.5);
}

@keyframes formHover {
  0% {
    background-image: linear-gradient(60deg, #7f92b7, #528ec7);
}
  25% { 
    background-image: linear-gradient(60deg, #7f92b7, #7f92b7, #7f92b7, #528ec7);
}
  50% { 
    background-image: linear-gradient(60deg, #7f92b7, #7f92b7, #7f92b7, #7f92b7);
}
  75% { 
    background-image: linear-gradient(60deg, #528ec7, #7f92b7, #7f92b7, #7f92b7);
}
  100% {
    background-image: linear-gradient(60deg,#528ec7,#7f92b7);
  }
}

article .cover-clear {
  background-color: transparent;
}


@media only screen and (max-width: 599px) {
  .wp-block-columns.reverse {
    flex-direction: column-reverse;
  }
 }


.mg-center li {
  padding: 0 0 10px 10px;

}

.mg-center li:first-of-type {
  padding-top: 10px;

}

@media only screen and (min-width: 800px) {
  .mg-center {
    margin: 0 15%;
  }
}


.port-card {
  backdrop-filter: blur(1000px);
  background: linear-gradient(60deg, rgba(127,146,183,0.10) 0%, rgba(82,142,199,0.10) 100%);
  padding: 10px;
  box-shadow: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);
}

.wp-block-button {
  width: 100%;
  padding: 0px 5rem;
}

.wp-block-button a {
  width: 100%;
  box-shadow: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);
}

@media only screen and (min-width: 1000px) {
  .port-card {
    margin: 0px 20%;
  }
}

article .is-screen-height {
  min-height: calc(100vh - 68px);
  margin-top: -48px;
}

@media only screen and (min-width: 900px) {
  article .is-screen-height {
    margin-top: -64px;
  }
}


.blur-card {
  backdrop-filter: blur(10px) opacity(0.75);
  padding: 75px 0;
  max-width: 450px;
  margin: auto;
  clip-path: inset(10% 3% 13% 4% round 5% 20% 0 10%);
}

article .wp-block-cover .wp-block-group .parlee-digital-text {
  font-size: 50px;
  margin: 10px 0;
}

`;
