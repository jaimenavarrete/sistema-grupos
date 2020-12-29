import React from 'react';

import SubjectSearch from './../Components/General/SubjectSearch';

function ProjectGroups() {
    return (
        <main className="bg-gray-200 min-h-screen p-5">
            <h2 className="subtitle-1 text-gray-700">Grupos de proyecto</h2>
            <div className="max-w-7xl mx-auto">
                <SubjectSearch />
            </div>
        </main>
    )
}

export default ProjectGroups
