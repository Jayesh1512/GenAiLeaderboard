import { useRef, useEffect } from "react";
import { Link } from "./Link";

export function Burger() {
	const ref = useRef(null);

	useEffect(() => {
		const anchors = document.querySelectorAll(".links a");
		anchors.forEach((anchor) => {
			anchor.addEventListener("click", () => {
				// @ts-ignore
				ref.current.checked = false;
			});
		});
	}, [ref]);

	return (
		<>
			<input type="checkbox" id="menu" className="hidden" ref={ref} />
			<label htmlFor="menu" id="menu-label" className="hidden max-md:block cursor-pointer">
				<div className="menu" />
			</label>
			<div className="ham-nav text-xl links">
				<Link href="https://gdsc.community.dev/events/details/developer-student-clubs-malla-reddy-engineering-college-hyderabad-india-presents-build-with-ai/" text="Home" newTab className="border-b-2" />
				<Link href="#leaderboard" text="Leaderboard" className="border-b-2" />
				<Link href="#footer" text="About" className="border-b-2" />
			</div>
		</>
	);
}
