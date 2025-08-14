import 'react-native-gesture-handler';
import { StackNavigator } from './presentation/navigator/StackNavitator';
import { ThemeProvider } from './presentation/context/ThemeContext';



export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
};
