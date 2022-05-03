import { useState, createContext } from 'react';

export const showMenuContext = createContext({
  showMenu: false,
  toggleMenu: () => {},
});

export const ShowMenuContextProvider = (props) => {
  const toggleMenu = (showMenu) => {
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
