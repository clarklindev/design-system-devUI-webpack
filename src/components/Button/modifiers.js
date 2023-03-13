import { css } from 'styled-components';

export const MODIFIERS = {
  small: () => css`
    padding: 8px;
    height: 30px;
    font-size: 1rem;
  `,

  large: () => css`
    padding: 10px 1rem;
    height: auto;
    font-size: 1.2rem;
  `,

  padding: () => css`
    padding: 15px;
  `,

  paddinghorizontal: () => css`
    padding-left: 15px;
    padding-right: 15px;
  `,

  paddingvertical: () => css`
    padding-top: 15px;
    padding-bottom: 15px;
  `,

  nopadding: () => css`
    padding: 0px;
  `,

  nopaddinghorizontal: () => css`
    padding-left: 0;
    padding-right: 0;
  `,

  nopaddingvertical: () => css`
    padding-top: 0;
    padding-bottom: 0;
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

  nodimensions: () => css`
    width: auto;
    height: auto;
  `,

  nopointer: () => css`
    cursor: default;
  `,
};
