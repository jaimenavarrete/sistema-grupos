import React from 'react';

import ReportsDownload from './ReportsDownload';
import PaginationButtons from '../General/PaginationButtons';

function ReportsPending() {
    return (
        <section className="card max-w-7xl">
                <h4 className="subtitle-2 mb-5">Alumnos pendientes de grupo</h4>
                
                <ReportsDownload />

                <div className="overflow-x-auto">
                    <table className="text-left min-w-max w-full mb-10">
                        <thead>
                            <tr className="bg-blue-500 text-white border-2 border-blue-500">
                                <th className="p-3 font-bold">N°</th>
                                <th className="p-3">Apellidos</th>
                                <th className="p-3">Nombres</th>
                                <th className="p-3">Usuario</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Materias dictadas</th>
                                <th className="p-3">Fecha creación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-300 border-2 border-blue-500">
                                <td className="p-3 font-bold">1</td>
                                <td className="p-3">Jaime Eduardo Navarrete Cubias</td>
                                <td className="p-3">Navarrete Cubias</td>
                                <td className="p-3">jaimenava321</td>
                                <td className="p-3">jaimenava321@gmail.com</td>
                                <td className="p-3">5</td>
                                <td className="p-3">27-12-2020</td>
                            </tr>
                            <tr className="border-2 border-blue-500">
                                <td className="p-3 font-bold">2</td>
                                <td className="p-3">Jaime Eduardo</td>
                                <td className="p-3">Navarrete Cubias</td>
                                <td className="p-3">jaimenava321</td>
                                <td className="p-3">jaimenava321@gmail.com</td>
                                <td className="p-3">5</td>
                                <td className="p-3">27-12-2020</td>
                            </tr>
                            <tr className="bg-gray-300 border-2 border-blue-500">
                                <td className="p-3 font-bold">3</td>
                                <td className="p-3">Jaime Eduardo</td>
                                <td className="p-3">Navarrete Cubias</td>
                                <td className="p-3">jaimenava321</td>
                                <td className="p-3">jaimenava321@gmail.com</td>
                                <td className="p-3">5</td>
                                <td className="p-3">27-12-2020</td>
                            </tr>
                            <tr className="border-2 border-blue-500">
                                <td className="p-3 font-bold">3</td>
                                <td className="p-3">Jaime Eduardo</td>
                                <td className="p-3">Navarrete Cubias</td>
                                <td className="p-3">jaimenava321</td>
                                <td className="p-3">jaimenava321@gmail.com</td>
                                <td className="p-3">5</td>
                                <td className="p-3">27-12-2020</td>
                            </tr>
                            <tr className="bg-gray-300 border-2 border-blue-500">
                                <td className="p-3 font-bold">3</td>
                                <td className="p-3">Jaime Eduardo</td>
                                <td className="p-3">Navarrete Cubias</td>
                                <td className="p-3">jaimenava321</td>
                                <td className="p-3">jaimenava321@gmail.com</td>
                                <td className="p-3">5</td>
                                <td className="p-3">27-12-2020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <PaginationButtons />

            </section>
    );
}

export default ReportsPending;