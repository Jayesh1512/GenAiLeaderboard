import { Input } from "./ui/input";

export function Search({ search, setSearch }: SearchProps) {
	return (
		<Input
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			className="w-4/5 h-12 text-lg shadow-sm rounded-lg max-md:w-[92vw]"
			type="text"
			placeholder="Search"
		/>
	);
}

interface SearchProps {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}
