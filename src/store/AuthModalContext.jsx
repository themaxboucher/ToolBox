import { createContext, useState } from "react";

const AuthModalContext = createContext({
  authModalIsOpen: false,
  openAuthModal: () => {},
  closeAuthModal: () => {},
});

export function AuthModalContextProvider(props) {
  const [authModalIsOpen, setAuthModalIsOpen] = useState(false);
  function openAuthModalHandler() {
    setAuthModalIsOpen(true);
  }
  function closeAuthModalHandler() {
    setAuthModalIsOpen(false);
  }

  const context = {
    authModalIsOpen: authModalIsOpen,
    openAuthModal: openAuthModalHandler,
    closeAuthModal: closeAuthModalHandler,
  };

  return (
    <AuthModalContext.Provider value={context}>
      {props.children}
    </AuthModalContext.Provider>
  );
}

export default AuthModalContext;
