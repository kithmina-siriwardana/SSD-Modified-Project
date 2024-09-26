import React from 'react';

import NotAuthorized from '../components/NotAuthorized';

function Home() {
    return (
        <div>
            
            <div className="ltn__utilize-overlay"></div>
            <NotAuthorized/>
        </div>
    );   
}

export default Home;