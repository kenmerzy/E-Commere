import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const mainPaddingH = 16 / 375 * width

export const Colors = {
  primaryBlue: '#40BFFF',
  primaryRed: '#FB7181',
  primaryYellow: '#FFC833',
  primaryGreen: '#53D1B6',
  primaryPulple: '#5C61F4',
  neutralDark: '#223263',
  neutralGrey: '#9098B1',
  neutralLight: '#EBF0FF',
  backgroundWhite: '#FFFFFF',
}

export const Fonts = {
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
}

export const TextStyles = {
  heading1: {
    ...Fonts.bold,
    fontSize: 32 / 375 * width,
    lineHeight: 1.5,
  },
  heading2: {
    ...Fonts.bold,
    fontSize: 24 / 375 * width,
    lineHeight: 1.5,
  },
  heading3: {
    ...Fonts.bold,
    fontSize: 20 / 375 * width,
    lineHeight: 1.5,
  },
  heading4: {
    ...Fonts.bold,
    fontSize: 16 / 375 * width,
    lineHeight: 1.5,
  },
  heading5: {
    ...Fonts.bold,
    fontSize: 14 / 375 * width,
    lineHeight: 1.5,
  },
  heading6: {
    ...Fonts.bold,
    fontSize: 10 / 375 * width,
    lineHeight: 1.5,
  },

  bodyLargeTextBold: {
    ...Fonts.bold,
    fontSize: 16 / 375 * width,
  },
  bodyLargeTextRegular: {
    ...Fonts.regular,
    fontSize: 16 / 375 * width,
  },
  bodyMediumTextBold: {
    ...Fonts.bold,
    fontSize: 14 / 375 * width,
  },
  bodyMediumTextRegular: {
    ...Fonts.regular,
    fontSize: 14 / 375 * width,
  },
  bodyNormalTextBold: {
    ...Fonts.bold,
    fontSize: 12 / 375 * width,
  },
  bodyNormalTextRegular: {
    ...Fonts.regular,
    fontSize: 12 / 375 * width,
  },

  captionLargeTextBold: {
    ...Fonts.bold,
    fontSize: 12 / 375 * width,
    lineHeight: 1.5,
  },
  captionLargeTextRegular: {
    ...Fonts.regular,
    fontSize: 12 / 375 * width,
    lineHeight: 1.5,
  },
  captionNormalTextBold: {
    ...Fonts.bold,
    fontSize: 10 / 375 * width,
    lineHeight: 1.5,
  },
  captionNormalTextRegular: {
    ...Fonts.regular,
    fontSize: 10 / 375 * width,
    lineHeight: 1.5,
  },
  captionNormalRegularLine: {
    ...Fonts.regular,
    fontSize: 10 / 375 * width,
    textDecorationLine: 'line-through',
    lineHeight: 1.5,
  },

  linkNormal: {
    ...Fonts.bold,
    fontSize: 14 / 375 * width,
    lineHeight: 1.5,
    color: Colors.primaryBlue,
  },
  linkSmall: {
    ...Fonts.bold,
    fontSize: 12 / 375 * width,
    lineHeight: 1.5,
    color: Colors.primaryBlue,
  },
}

export const MessageStyles = {
  error: {
    style: { backgroundColor: Colors.primaryRed, alignItems: 'center' },
    titleStyle: TextStyles.bodyMediumTextBold,
    duration: 2500,
  },
  success: {
    style: { backgroundColor: Colors.primaryGreen, alignItems: 'center' },
    titleStyle: TextStyles.bodyMediumTextBold,
    duration: 2500,
  },
}
