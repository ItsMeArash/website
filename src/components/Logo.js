import React from 'react';

const Logo = (props) => {
    const {brand} = props;
    return (
        <div>
            <img src={brand} alt="Samsung Logo" style={{width: "150px"}}/>
        </div>
    );
};

export default Logo;