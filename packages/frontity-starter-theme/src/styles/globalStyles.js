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
    box-shadow: 3px 3px 4px 0 rgba(0,0,0,.4), -2px -2px 3px 0 rgba(255,255,255,.5);
}
`;
