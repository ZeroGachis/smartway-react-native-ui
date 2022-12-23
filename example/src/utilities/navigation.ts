import { NavigationContext } from '@react-navigation/native';
import { useContext } from 'react';

export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (context == null) {
    throw new Error('Navigation context is null');
  }
  return context;
}
