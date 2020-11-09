import React from 'react';
function BreadTitle(props) {
    return(
    <div className="demo">
        <div className="demo-nav">
            {props.title}
        </div>
    </div>
    )
}
export default BreadTitle;