import {NavigationUseType} from '../types/types';
import {useNavigation} from '@react-navigation/native';

export const useAppNavigate = () => useNavigation<NavigationUseType>();
