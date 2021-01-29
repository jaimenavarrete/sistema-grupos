import React from 'react';

function ReportsPagination() {
    return (
        <div className="text-center">
            <button className="btn-pagination bg-blue-500 text-white">1</button>
            {/* <span className="btn bg-transparent text-blue-500">...</span> */}
            <button className="btn-pagination">2</button>
            <button className="btn-pagination">3</button>
            <button className="btn-pagination">4</button>
            <button className="btn-pagination">5</button>
            <button className="btn-pagination">6</button>
        </div>
    );
}

export default ReportsPagination;