import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  sectionRef: null,
  sectionTwoRef: null,
  sideBarOpen: false,
  modalOPen: false,
  renderModal: false,
  purchaseModal: false,
};

const SectionContext = createContext();

const sectionReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SECTION_REF':
      return { ...state, sectionRef: action.payload };
    case 'SET_SECTION_TWO_REF':
      return { ...state, sectionTwoRef: action.payload };
    case 'OPEN_SIDE_BAR':
      return { ...state, sideBarOpen: true };
    case 'CLOSE_SIDE_BAR':
      return { ...state, sideBarOpen: false };
    case 'OPEN_MODAL':
      return { ...state, modalOPen: true };
    case 'CLOSE_MODAL':
      return { ...state, modalOPen: false };
    case 'OPEN_INITIAL_MODAL':
      return { ...state, renderModal: true};
    case 'CLOSE_INITIAL_MODAL':
      return { ...state, renderModal: false};
    case 'OPEN_PURCHASE_MODAL' :
      return { ...state, purchaseModal: true};
    case 'CLOSE_PURCHASE_MODAL' :
      return { ...state, purchaseModal: false};
    default:
      return state;
  }
};

export const SectionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sectionReducer, initialState);

  return (
    <SectionContext.Provider value={{ state, dispatch }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection must be within the section provider');
  }
  return context;
};
