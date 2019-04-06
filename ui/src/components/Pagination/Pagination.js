import React, { useState } from 'react';

const Pagination = (props) => {

    const [pagesArray, setPagesArray] = useState([1,2,3]);

    const nextPageHandler = () => {
        pagesArray.shift();
        pagesArray.push(pagesArray[1]+1);
        setPagesArray(pagesArray);
        props.pageClick(pagesArray[2]);
    }

    return (
        <div className="pagination-main">
            {
                pagesArray.map(page => 
                        <button key={page} onClick={() => props.pageClick(page)}>{page}</button>
                    )
            }
            <button onClick={() => nextPageHandler()}>></button>
        </div>
    );
}

export default Pagination;