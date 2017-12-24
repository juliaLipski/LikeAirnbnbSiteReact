import React from 'react';
import Cell from './Cell';

export default ({ data }) => {

    return (
        <div className="contaner dataH">
            <div className="row ">
                {
                    data.map((item) =>
                        <div className="col-lg-4 offset1" key={item.id}>
                            <Cell {...item} />
                        </div>
                    )
                }
            </div>
        </div>
    );

}