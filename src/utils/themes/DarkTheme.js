import {
  colors, transparency
} from '../colors';

export const darkTheme = {
  name: 'darkTheme',
  //actual page background
  background: {
    backgroundColor: colors.red[300],
  },
  color: {
    DEFAULT: 'hotpink',
    warning: colors.status.warning,
    success: colors.status.success,
    info: colors.status.info,
    error: colors.status.error,
    white: colors.neutral[100],
    black: colors.neutral[1000],
  },

  global: {
    inputHeight: '50px',
    padding: '1rem',
    margin: '1rem',
    borderWidth: '1px',
    borderRadius: '5px',
    borderColor: colors.neutral[300],
    placeholder: colors.neutral[400],

    formElementColor: colors.neutral[200],
    formElementBackground: colors.blue[100],

    disabledColor: colors.neutral[400],
    disabledBackgroundColor: colors.neutral[300],
  },

  typography: {
    h1: {
      fontSize: '4.209rem',
    },
    h2: {
      fontSize: '3.157rem',
    },
    h3: {
      fontSize: '2.369rem',
    },
    h4: {
      fontSize: '1.777rem',
    },
    h5: {
      fontSize: '1.333rem',
    },
    h6: {
      fontSize: '1.2rem',
    },
    header: {
      margin: '0 0 1rem',
      fontFamily: "'Roboto', 'sans-serif'",
      lineHeight: '1.3',
      fontWeight: '400',
    },
  },

  accordion: {
    color: colors.neutral[100],
    backgroundColor: colors.neutral[400]
  },

  input: {
    color: colors.neutral[300],
    backgroundColor: colors.neutral[900],
    borderColor: colors.neutral[400] + transparency[10],
  },

  select: {
    color: colors.neutral[300],
    backgroundColor: colors.neutral[900],
    borderColor: colors.neutral[400] + transparency[10],
  },

  icon: {
    backgroundColor: colors.neutral[200] + transparency[50],
    fill: colors.neutral[600],
    stroke: colors.neutral[600],
  },

  checkbox: {
    borderColor: colors.neutral[200],
    backgroundColor: colors.neutral[100],
  },

  counter: {
    borderColor: 'hotpink',
    backgroundColor: colors.neutral[900],
  },

  button: {
    //neutral component color
    base: {
      color: colors.neutral[400],
      backgroundColor: colors.neutral[600],
      borderColor: colors.neutral[400],
    },
    contained: {
      color: colors.neutral[100],
      backgroundColor: colors.neutral[400],
      borderColor: colors.neutral[100],
    },
    outlined: {
      color: colors.neutral[100],
      backgroundColor: colors.neutral[400],
      borderColor: colors.neutral[100],
    },
    text: {
      color: colors.neutral[100],
    },
  },
};
