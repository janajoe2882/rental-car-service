/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  // useCallback,
  useContext,
  // useEffect,
  // useMemo,
  useState
} from 'react';

const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

export function ContextProvider({ children }) {
  const [list, setList] = useState(null);

  // const defaultValues = useMemo(() => list, setList, []);

  return (
    <ThemeContext.Provider value={{ list, setList }}>
      {children}
    </ThemeContext.Provider>
  );
}
