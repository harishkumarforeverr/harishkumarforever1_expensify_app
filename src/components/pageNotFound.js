import React from  'react';
import {Link} from "react-router-dom";
const PageNotFound = () => (
    <div>
        <h4>404!</h4>
        <Link to="/">
            Go Home
        </Link>
    </div>
);
export default PageNotFound;