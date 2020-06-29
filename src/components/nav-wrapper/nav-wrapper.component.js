import React, {useContext} from 'react';
import {HistoryContext} from "../../providers/history-context.provider";

function NavWrapper({ innerContent }) {
    const { setHistory } = useContext(HistoryContext);
  function handleClick(evt) {
    if ( evt.target.href ) {
        setHistory(evt.target.getAttribute('href'));
    }
    evt.preventDefault();
  }

  return (
      <div onClick={handleClick} dangerouslySetInnerHTML={{
        __html: innerContent
      }} />
  );
}

export default NavWrapper;
