import React from 'react';

import ReportsTableTeachers from '../Components/Reports/ReportsTableTeachers';
import ReportsTableStudents from '../Components/Reports/ReportsTableStudents';
import ReportsTableGroups from '../Components/Reports/ReportsTableGroups';
import ReportsTablePending from '../Components/Reports/ReportsTablePending';

function Reports() {
    return (
        <main className="bg-gray-200 min-h-screen p-5">
            <h2 className="subtitle-1 text-gray-700">Reportes</h2>

            <ReportsTableTeachers />

            <ReportsTableStudents />

            <ReportsTableGroups />

            <ReportsTablePending />

        </main>
    );
}

export default Reports;