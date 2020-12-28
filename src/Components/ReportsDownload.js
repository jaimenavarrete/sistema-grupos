import React from 'react';

function ReportsDownload() {
    return (
        <div className="text-right">
            {/* <button className="text-3xl text-green-700 border-2 border-green-700 rounded py-1 px-2 mr-0 mb-5 hover:bg-green-700 hover:text-white focus:outline-none active:bg-green-800"><i className="las la-file-download"></i></button> */}
            <button className="bg-green-600 text-white text-3xl rounded py-1 px-2 mr-0 mb-5 hover:bg-green-700 focus:outline-none active:bg-green-800"><i className="las la-file-download"></i></button>
        </div>
    );
}

export default ReportsDownload;