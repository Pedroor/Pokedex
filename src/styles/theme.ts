export default {
  colors: {
    black: '#272727',
    white: '#FFFFFF',
    grey: '#919191',
    lightGrey: '#E7E7E8',
    semiGrey: '#F4F5F4',
    red: '#FA6555',
    green: '#41D168',
    blue: '#0055D4',
    lilac: '#6C79DB',
  },

  fontFamily: {
    regular: 'Montserrat_400Regular',
    light: 'Montserrat_300Light',
    bold: ' Montserrat_700Bold',
    extraBold: 'Montserrat_800ExtraBold',
  },

  textVariants: {
    title: {
      fontSize: '20px',
      fontFamily: 'Montserrat_800ExtraBold',
      lineHeight: '22px',
    },
    body1: {
      fontSize: '18px',
      fontFamily: 'Montserrat_700Bold',
      lineHeight: '22px',
    },
    body2: {
      fontSize: '16px',
      fontFamily: 'Montserrat_400Regular',
      lineHeight: '20px',
    },
    body3: {
      fontSize: '14px',
      fontFamily: 'Montserrat_300Light',
      lineHeight: '18px',
    },
    input: {
      fontSize: '14px',
      fontFamily: 'Montserrat_400Regular',
      lineHeight: '18px',
    },
  },
} as const;
