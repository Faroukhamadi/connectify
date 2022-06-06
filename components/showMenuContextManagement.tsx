import { useState, createContext, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const showMenuContext = createContext({
  showMenu: false,
  toggleMenu: (arg: boolean) => {},
});

export const ShowMenuContextProvider = (props: Props) => {
  const toggleMenu = (showMenu: boolean) => {
    setState({ ...state, showMenu: showMenu });
  };

  const initState = {
    showMenu: false,
    toggleMenu: toggleMenu,
  };

  const [state, setState] = useState(initState);

  return (
    <showMenuContext.Provider value={state}>
      {props.children}
    </showMenuContext.Provider>
  );
};
