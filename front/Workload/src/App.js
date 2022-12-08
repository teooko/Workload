import {
  configureFonts,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Main from './components/Main';
import {scale} from 'react-native-size-matters';

const fontConfig = {
  titleMedium: {
    fontFamily: 'Gogh-ExtraBold',
    fontSize: scale(21),
    lineHeight: scale(25),
  },
  titleSmall: {
    fontFamily: 'Raleway-Medium',
    fontSize: scale(12),
    lineHeight: scale(15),
  },
  bodyMedium: {
    fontFamily: 'Gogh-ExtraBold',
    fontSize: scale(16),
    lineHeight: scale(20),
  },
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({config: fontConfig}),
  colors: {
    primary: 'rgba(0, 0, 0, 0.0)',
    primaryContainer: 'red',
    secondary: 'red',
    secondaryContainer: '#323949',
    tertiary: 'green',
    tertiaryContainer: 'green',
    surface: '#272B37',
    surfaceVariant: '#323949',
    surfaceDisabled: 'red',
    background: 'red',
    error: 'red',
    errorContainer: 'red',
    onPrimary: 'red',
    onPrimaryContainer: 'red',
    onSecondary: 'red',
    onSecondaryContainer: 'red',
    onTertiary: 'red',
    onTertiaryContainer: 'red',
    onSurface: '#ffffff',
    onSurfaceVariant: '#ffffff',
    onSurfaceDisabled: 'yellow',
    onError: 'yellow',
    onErrorContainer: 'yellow',
    onBackground: 'yellow',
    outline: 'yellow',
    shadow: 'yellow',
    inverseOnSurface: 'yellow',
    inverseSurface: 'yellow',
    inversePrimary: 'yellow',
    backdrop: 'yellow',
    elevation: {
      level0: '#272B37',
      level1: 'yellow',
      level2: 'yellow',
      level3: 'yellow',
      level4: 'yellow',
      level5: 'yellow',
    },
  },
};

export default function App() {
  return (
    <PaperProvider theme = {theme}>
      <Main />
    </PaperProvider>
  );
}
