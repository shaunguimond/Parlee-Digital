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
    width: 100%
  }

  .wp-block-columns {
    display: flex;
    margin-bottom: 28px;
    flex-wrap: wrap; }
    @media (min-width: 782px) {
      .wp-block-columns {
        flex-wrap: nowrap; } }
    .wp-block-columns.has-background {
      padding: 20px 30px; }
  
  .wp-block-column {
    flex-grow: 1;
    min-width: 0;
    word-break: break-word;
    overflow-wrap: break-word; }
    @media (min-width: 1282px) {
      .wp-block-column {
        padding: 25px;
        flex-basis: 0;
        flex-grow: 1; }
        .wp-block-column[style] {
          flex-grow: 0; }
        .wp-block-column:not(:first-child) {
          margin-right: 32px; } }
  
  /**
   * All Columns Alignment
   */
  .wp-block-columns.are-vertically-aligned-top {
    align-items: flex-start; }
  
  .wp-block-columns.are-vertically-aligned-center {
    align-items: center; }
  
  .wp-block-columns.are-vertically-aligned-bottom {
    align-items: flex-end; }
  
  /**
   * Individual Column Alignment
   */
  .wp-block-column.is-vertically-aligned-top {
    align-self: flex-start; }
  
  .wp-block-column.is-vertically-aligned-center {
    -ms-grid-row-align: center;
        align-self: center; }
  
  .wp-block-column.is-vertically-aligned-bottom {
    align-self: flex-end; }
  
  .wp-block-column.is-vertically-aligned-top, .wp-block-column.is-vertically-aligned-center, .wp-block-column.is-vertically-aligned-bottom {
    width: 100%; }

`;
