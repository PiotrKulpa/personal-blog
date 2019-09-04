import React, { memo, useCallback, useRef } from 'react';
import { withRouter } from 'react-router-dom'

const Search = ({ history }) => {
  
  const inputSearchEl = useRef(null);
  const onSearch = useCallback(() => {
   history.push(`/szukaj/${inputSearchEl.current.value}`);
  });

  const onEnterSearch = useCallback((e) => {
    if (e.key === 'Enter') {
      history.push(`/szukaj/${inputSearchEl.current.value}`);
    }
  });

  return (
    <div className="widget widget-search-box">
      <div className="input-group stylish-input-group" onKeyDown={onEnterSearch}>
        <input ref={inputSearchEl} type="text" className="form-control" placeholder="Szukaj wpisów . . ." />
        <span className="input-group-addon">
          <button onClick={onSearch} type="submit">
            <span className="flaticon-search" aria-hidden="true"></span>
          </button>
        </span>
      </div>
    </div>
  )
}

export default withRouter(memo(Search));
