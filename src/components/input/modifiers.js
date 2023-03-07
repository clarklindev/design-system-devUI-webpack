import { css } from 'styled-components';

export const MODIFIERS = {
  //input
  noborder: () => css`
    border: none;
  `,
  noborderleft: () => css`
    border-left: none;
  `,
  noborderright: () => css`
    border-right: none;
  `,

  readonly: (props) => css`
    cursor: default;
  `,
  nonselectable: (props) => css`
    pointer-events: none;
  `,
  noborderradius: (props) => css`
    border-radius: 0;
  `,
  noborderleftradius: (props) => css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `,
  noborderrightradius: (props) => css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `,
  nopadding: (props) => css`
    padding: 0;
  `,
  noleftpadding: (props) => css`
    padding-left: 0;
  `,
  norightpadding: (props) => css`
    padding-right: 0;
  `,

  textcenter: (props) => css`
    text-align: center;
  `,

  // inputsearch
  search: () => css`
    /* clears the 'X' from Internet Explorer */
    &::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }
    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    /* clears the 'X' from Chrome */
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  `,
};
