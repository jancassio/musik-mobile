import { Platform } from "react-native";

interface IFonts {
  CircularStdBlack: string
  CircularStdBold: string
  CircularStdBook: string
  CircularStdMedium: string
  PhenomenaBold: string
  PhenomenaExtraBold: string
  SanFranciscoDisplayBold: string
  SanFranciscoDisplayMedium: string
  SanFranciscoDisplayRegular: string
  SanFranciscoTextBold: string
  SanFranciscoTextHeavy: string
  SanFranciscoTextMedium: string
  SanFranciscoTextSemibold: string
  SFUITextRegular: string
}

export const AOSFonts = {
  CircularStdBlack : 'CircularStd-Black',
  CircularStdBold : 'CircularStd-Bold',
  CircularStdBook : 'CircularStd-Book',
  CircularStdMedium : 'CircularStd-Medium',
  PhenomenaBold : 'Phenomena-Bold',
  PhenomenaExtraBold : 'Phenomena-ExtraBold',
  SanFranciscoDisplayBold : 'San Francisco Display Bold',
  SanFranciscoDisplayMedium : 'San Francisco Display Medium',
  SanFranciscoDisplayRegular : 'San Francisco Display Regular',
  SanFranciscoTextBold : 'San Francisco Text Bold',
  SanFranciscoTextHeavy : 'San Francisco Text Heavy',
  SanFranciscoTextMedium : 'San Francisco Text Medium',
  SanFranciscoTextSemibold : 'San Francisco Text Semibold',
  SFUITextRegular : 'SF UI Text Regular',
}

export const iOSFonts = {
  // CircularStdBlack : 'CircularStd-Black',
  // CircularStdBold : 'CircularStd-Bold',
  // CircularStdBook : 'CircularStd-Book',
  // CircularStdMedium : 'CircularStd-Medium',
  // PhenomenaBold : 'Phenomena-Bold',
  // PhenomenaExtraBold : 'Phenomena-ExtraBold',
  ...AOSFonts,
  SanFranciscoDisplayBold : 'System',
  SanFranciscoDisplayMedium : 'System',
  SanFranciscoDisplayRegular : 'System',
  SanFranciscoTextBold : 'System',
  SanFranciscoTextHeavy : 'System',
  SanFranciscoTextMedium : 'System',
  SanFranciscoTextSemibold : 'System',
  SFUITextRegular : 'System',
}

export const Fonts: IFonts = Platform.OS === 'ios' ? iOSFonts : AOSFonts
