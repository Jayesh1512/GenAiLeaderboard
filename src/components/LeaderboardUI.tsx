import { useState, ChangeEvent } from 'react';
import { leaderBoardData } from './leaderBoard';

const LeaderboardUI = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 15;

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset current page when search term changes
    };

    // Calculate pagination
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;

    const index1 = {
        "name": "Tanay Pande",
        "skills": 3,
        "trackOne": 1,
        "trackTwo": 1,
        "trackThree": 1,
        "color": "green",
        "latestSkill": 1715299200000,
        "rank": 1
    };

    // Add index1 to the beginning of the data array
    const filteredData = [index1, ...leaderBoardData].filter((participant) =>
        participant.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

    // Change page
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    // Function to convert a string to proper sentence case
    const toProperCase = (str: string) => {
        return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
    };

    return (
        <div className="py-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full rounded-md border bg-background px-4 py-2"
                />
            </div>
            <div className="max-w-[90vw] overflow-x-auto rounded-md border-2">
                <table className="-collapse w-full table-auto  rounded-xl">
                    <thead>
                        <tr className="bg-background">
                            <th className="px-4 py-2 text-xs md:text-base">Rank</th>
                            <th className="px-4 py-2 text-left text-xs md:text-base ">Name</th>
                            <th className="py-2 text-xs md:px-4 md:text-base">Vertex</th>
                            <th className="py-2 text-xs md:px-4 md:text-base">Gemini</th>
                            <th className="px-1 py-2 text-xs md:px-4 md:text-base">
                                Gen
                                <br className="md:hidden" />
                                AIus
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.map((participant, index) => (
                            <tr key={index} className={`border bg-background`}>
                                <td className={`${participant.color}  py-2 text-center md:px-4`}>
                                    <p>{participant.rank}</p>
                                </td>
                                <td className="px-2 py-2 text-xs font-medium md:px-4 md:text-base">{toProperCase(participant.name)}</td>
                                <td className=" px-6 py-2 text-center">{participant.trackOne}</td>
                                <td className=" px-6 py-2 text-center">{participant.trackTwo}</td>
                                <td className=" px-6 py-2 text-center">{participant.trackThree}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-end">
                <button
                    onClick={previousPage}
                    disabled={currentPage === 1}
                    className="mr-2 rounded-md  border px-4 py-2 text-primary shadow-sm shadow-blue-500 focus:outline-none"
                >
                    Previous
                </button>
                <button
                    onClick={nextPage}
                    disabled={currentEntries.length < entriesPerPage}
                    className="rounded-md border px-4 py-2 text-primary shadow-sm shadow-emerald-700 focus:outline-none"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default LeaderboardUI;
