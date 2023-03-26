export const colors = {
  blue:{
    100: '#99d6ff',
    200: '#5cbeff',
    300: '#0A9DFF',
    400: '#007ACC',
    500: '#00568F',
    600: '#000645',
  },
  
  green:{
    100: '#72afb0',
    200: '#00A949',
    300: '#008439',
    400: '#005424',
  },
  
  yellow:{
    100: '#E98A15',
    200: '#EA8F1F',
    300: '#CD7A13',
  },
  
  red:{
    100: '#D00000',
    200: '#A40000',
    300: '#5A0000',
  },

  neutral:{
    100: '#FFFFFF',
    200: '#e4e4e4',
    300: '#d0d0d0',
    400: '#939393',
    500: '#4a4b53',
    600: '#3d3d3d',
    700: '#2d2d2d',
    800: '#212121',
    900: '#1d1d1d',
    1000: '#000000',
  },

  dev:{
    debug: 'pink',
    error: 'red',
  },

  status: {
    warning: '#ed6c02',
    error: '#d32f2f',
    success: '#2e7d32',
    info: '#0288d1',
  }
};

export const transparency = {
  100: 'FF',
  90: 'E6',
  80: 'CC',
  70: 'B3',
  60: '99',
  50: '80',
  40: '66',
  30: '4D',
  20: '33',
  10: '1A',
  0: '00',
};

export const typography = {
  h1: '3.209rem',
  h2: '2.757rem',
  h3: '2.069rem',
  h4: '1.677rem',
  h5: '1.333rem',
  h6: '1.1rem',
};

// components dont point to globals directly - only from theme
export const global = {
  color: colors.neutral[400],
  fontFamily: "'Roboto', 'sans-serif'",

  headingColor: colors.neutral[500],
  headingFontFamily: "Arial, Helvetica, sans-serif",

  inputHeight: '50px',
  padding: '1rem',
  margin: '1rem',
  borderWidth: '1px',
  borderRadius: '5px', 
  gap: '5px', 
  borderColor: colors.neutral[500],
  separator: colors.neutral[200],
  componentIcons: colors.neutral[400],
};

// theme - styling for components 
export const darkTheme = {
  name: 'darkTheme',

  Heading:{
    fontFamily: global.headingFontFamily,
    color: global.headingColor,

    fontSize: {
      h1: typography.h1,
      h2: typography.h2,
      h3: typography.h3,
      h4: typography.h4,
      h5: typography.h5,
      h6: typography.h6,
    },

    margin: '0 0 1rem',
    lineHeight: '1.3',
    fontWeight: '400',
    
  },
  
  Text:{
    color: global.text,
    marginBottom: global.padding
  },

  Accordion: {
    title:{
      color: global.headingColor,
    },
    content:{
      color: global.color,
    },
    componentIcons: {
      stroke: global.componentIcons,
      fill: 'none'
    }
  },

  Layout:{
    section:{
      padding: '50px',
      borderColor: global.separator
    },
    block:{
      padding: '25px 0'
    }
  },
  
  LabelSomething: {
    gap: global.gap
  },

  Separator:{
    borderColor: global.separator
  },

  Input: {
    color: colors.neutral[300],
    backgroundColor: colors.neutral[900],
    borderColor: colors.neutral[400] + transparency[10],
  },

  Select: {
    color: colors.neutral[300],
    backgroundColor: colors.neutral[900],
    borderColor: colors.neutral[400] + transparency[10],
  },

  Icon: {
    fill: "",
    stroke: colors.neutral[200],
  },

  Checkbox: {
    borderColor: colors.neutral[200],
    backgroundColor: colors.neutral[100],
  },

  Counter: {
    borderColor: 'hotpink',
    backgroundColor: colors.neutral[900],
  },

  Button: {
    base: {
      color: colors.neutral[400],
      border: `1px solid ${colors.neutral[400]}`,
      backgroundColor: colors.neutral[600],
      padding: `8px ${global.padding}`,
      borderRadius: global.borderRadius
    },
    contained: {
      color: colors.neutral[100],
      backgroundColor: colors.neutral[400],
      borderColor: colors.neutral[100],
    },
    outlined: {
      color: colors.neutral[400],
      backgroundColor: "transparent",
      border: `1px solid ${colors.neutral[400]}`,
    },
    text: {
      color: colors.neutral[500],
    },
  },
};
