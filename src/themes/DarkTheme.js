import { colors, transparency } from './colors';
import { typography } from './typography';

// these props are shared amongst theme
const shared = {
  inputHeight: '50px',
  padding: '1rem',
  margin: '1rem',
  borderWidth: '1px',
  borderRadius: '5px',  

  headingColor: colors.neutral[600],
  color: colors.neutral[400],
  borderColor: colors.neutral[500],

  separator: colors.neutral[200],
  
  componentIcons: colors.neutral[400],
};

// theme - styling for full of components 
export const darkTheme = {
  name: 'darkTheme',

  accordion: {
    headingColor: shared.headingColor,
    color: shared.color,
    componentIcons: {
      stroke: shared.componentIcons,
      fill: 'none'
    }
  },

  LabelSomething: {
    gap: '5px'
  },

  separator:{
    borderColor: shared.separator
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
    fill: "",
    stroke: colors.neutral[200],
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
