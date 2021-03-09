import React, { useState } from "react"; 
import { Pagination } from "react-bootstrap"; 
import PropTypes from "prop-types";

export default function PaginationHandler(props){  

    const [active, setActive] = useState(0)
    const [paging, setPaging] = useState({offset:0, limit:10})
    const pagingHandler = () => {
    let offset = parseInt(event.target.id);
    setPaging(offset)
    props.pageHandler(event.target.id - 1);   };

  const nextHandler = () => {
    setActive(active + 1)
    props.pageHandler(active + 1);   };

  const backHandler = () => {
    setActive(active - 1)
    props.pageHandler(active - 1);   };

  const renderPageNumbers = (pageNumbers, totalPages) => {
     setActive(active);
   
    return (
      <Pagination>
        <Pagination.Prev disabled={active < 5} onClick={ setActive(active) > 5 &&  backHandler }  />

        {
      pageNumbers.map(number => {
              if (
                number >= parseInt(active) - 3 &&
                number <= parseInt(active) + 3 
              ) {
                return (
                  <Pagination.Item
                    id={number}
                    active={number == active}
                    onClick={pagingHandler}
                  >
                    {number}
                  </Pagination.Item>
                );
              } else {
                return null;
              }
        })}
        <Pagination.Next onClick={ setActive(active) <= totalPages - 4 && nextHandler}  />
      </Pagination>
    );   };

  const BuildComponent = (props) => {
    const { totalPages } = props;
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="pull-right">
      {renderPageNumbers(pageNumbers ,totalPages)}
      </div>
    );   
};

 return(
     <BuildComponent  />
 )

} 
   PaginationHandler.propTypes = 
   {
    paging: PropTypes.object,
    pageHandler: PropTypes.func,
    totalPages: PropTypes.object 
   };