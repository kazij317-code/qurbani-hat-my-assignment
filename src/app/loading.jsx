// -------------------------------Start: 46_8 ---------------------------------------
// (23)st
import React from 'react';

const LoadingPage = () => {
    return (
        // <div className="flex h-[85vh] items-center justify-center">
        //     Global loading
        //     {/* (24)from daisyUi then create loading.jsx file in [id] folder in category folder */}
        //     <span className="loading loading-dots loading-xl"></span>

        // </div>
// alternate loading
     <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#244D3F]"></div>
      </div>



    );
};

export default LoadingPage;
// (23)en
// ---------------------End:46_8-(1) to () --------------------------------