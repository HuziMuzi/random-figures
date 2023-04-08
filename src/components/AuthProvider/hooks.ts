import {useContext} from 'react';
import Context, {ContextType} from './context';

export const useAuth = (): ContextType => useContext(Context);
