import { leaderBoardData } from './leaderBoard.js';
import { DataTable } from './DataTable.js';
import { columns } from './columns.js';

export function LB({ search }: LBProps) {
	let lbData = leaderBoardData;

	if (search.length) {
		lbData = leaderBoardData.filter((lb) => lb.name.toLowerCase().includes(search.toLowerCase()));
	}

	const rank = (data: (typeof leaderBoardData)[0]) => {
		return leaderBoardData.findIndex((lb) => lb.name === data.name) + 1;
	};

	const rows = lbData.map((r) => ({
		rank: rank(r),
		name: r.name,
		VertexAI: r.trackOne,
		Gemini: r.trackTwo,
		GenAlus : r.trackThree,
	}));
	return (
		<div id="leaderboard" className="my-4 w-4/5 max-md:w-[92vw]">
			<DataTable columns={columns} data={rows} />
		</div>
	);
}

interface LBProps {
	search: string;
}
