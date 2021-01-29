import React from 'react';

import SubjectSearch from './../Components/General/SubjectSearch';
import SubjectGroupsTable from '../Components/SubjectGroups/SubjectGroupsTable';

function SujectGroups() {
    return (
        <main className="bg-gray-200 min-h-screen p-5">
            <h2 className="subtitle-1 text-gray-700">Grupos de materias</h2>
            <div className="max-w-7xl mx-auto">
                <SubjectSearch />
                <SubjectGroupsTable />
            </div>
        </main>
    )
}

export default SujectGroups
