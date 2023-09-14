import React from 'react';

const Loading = () => {
    return(
        <div className="col-12 heading justify-content-center loading">
            <br/><br/>
            <br/><br/>
            <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            </div>
        </div>
    );
};

export default Loading;