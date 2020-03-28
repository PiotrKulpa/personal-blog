import React, { memo, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { useSelector } from 'react-redux';

const Pagination = (props) => {
  const [totalPagesData, setTotalPagesData] = useState([1]);
  const [linkWidth, setLinkWidth] = useState(0);
  const totalPages = useSelector(({ blogReducer }) => blogReducer.totalPages);
  const { url = '', currentPage } = props;
  const convCurrentPage = Number(currentPage);
  const convTotalPages = Number(totalPages);
  const refLink = useRef(0);

  useEffect(() => {
    setLinkWidth(refLink.current.clientWidth);
  }, [refLink]);

  useEffect(() => {
    const accum = [];
    for(let x = 0; x < convTotalPages; x++) {
      accum.push(x + 1);
    };
    setTotalPagesData(accum);
  }, [totalPages]);

  return (
    <div className="pagination-layout2 margin-b-30">
      <ul   
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <li style={{pointerEvents: convCurrentPage !== 1 ? 'inherit' : 'none'}}>
          <Link to={`${url}${convCurrentPage - 1}`} >Poprzednia strona</Link>
        </li>
        <div
        style={{
          width: `${3 * linkWidth}px`,
          overflowX: 'hidden'
        }}
        >
          <div
            style={{
              marginLeft: `-${(convCurrentPage - 2) * linkWidth }px`,
              display: 'flex',
            }}
          >
            {totalPagesData && totalPagesData.map((el) => 
              <Link 
                style={{
                  fontSize: '18px',
                  color: `${convCurrentPage === el ? 'white' : '#111111'}`,
                  padding: '10px 17px',
                  borderRadius: '4px',
                  backgroundColor: `${convCurrentPage === el ? 'black' : '#f5f5f5'}`,
                  display: 'block',
                 }}
                key={el} 
                to={`${url}${el}`} 
                ref={refLink}
              >
                {el}
              </Link>)}
          </div>
        </div>
        <li style={{pointerEvents: convCurrentPage >= convTotalPages ? 'none' : 'inherit'}}>
          <Link to={`${url}${convCurrentPage + 1}`} >Następna strona</Link>
        </li>
      </ul>
    </div>
  )
}

export default withApollo(memo(Pagination));

