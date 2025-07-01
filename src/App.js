import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'
import SoundProvider from './contexts/SoundContext';
import RecordeProvider from './contexts/RecordeContext';
import IdiomaProvider from './contexts/IdiomaContext';
import ThemeProvider from './contexts/ThemeContext';

export default function App() {
  return (
    <NavigationContainer>
      <IdiomaProvider>
        <RecordeProvider>
          <SoundProvider>
            <ThemeProvider>
              <StatusBar style="auto" />
              <Routes />
            </ThemeProvider>
          </SoundProvider>
        </RecordeProvider>
      </IdiomaProvider>
    </NavigationContainer>
  );
}
