import React, {useContext} from 'react';
import {HistoryContext} from "../../providers/history-context.provider";

function NavWrapper({ innerContent }) {
    const { setHistory } = useContext(HistoryContext);
  function handleClick(evt) {
    if ( evt.target.href ) {
        const targetHref = evt.target.getAttribute('href');
        if ( targetHref.match(/^(http|https):\/\//) ) return;
        setHistory(targetHref);
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
