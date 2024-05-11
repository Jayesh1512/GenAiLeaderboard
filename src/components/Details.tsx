import { updateTime, leaderBoardData } from './leaderBoard.js';
export function Details() {
	const green = leaderBoardData.filter((i) => i.skills === 3).length;
	const pink = leaderBoardData.filter((i) => i.skills === 2).length;
	const blue = leaderBoardData.filter((i) => i.skills === 1).length;

	return (
		<div className="my-4 flex w-2/5 flex-col items-center justify-center gap-4 rounded-md border-4 border-blue-400 p-4 max-md:w-[92vw]">
			<h2 className="text-center text-xl font-medium text-primary">Google GenAI Study Jams Leaderboard</h2>
			<div className="flex flex-col">
				<p className="text-center uppercase text-primary">Legend</p>
				<div className="flex gap-2 justify-around max-md:flex-col">
					<div className="green flex h-8 items-center pl-4 text-primary">
						Three Tracks{' '}
						<span className="ml-1 flex w-8 items-center justify-center rounded-md bg-green-300 px-2 text-black">
							{green+1}
						</span>
					</div>
					<div className="pink flex h-8 items-center pl-4 text-primary">
						Two Track{' '}
						<span className="ml-1 flex w-8 items-center justify-center rounded-md bg-pink-300 px-2 text-black">
							{pink}
						</span>
					</div>
					<div className="blue flex h-8 items-center pl-4 text-primary">
						One Track{' '}
						<span className="ml-1 flex w-8 items-center justify-center rounded-md bg-blue-300 px-2 text-black">
							{blue}
						</span>
					</div>
				</div>
				<span className="p-2 text-sm font-light text-gray-400 drop-shadow-md">Last Updated: {updateTime}</span>
			</div>
		</div>
	);
}
