import { Switch } from '@/components/ui/switch';
import { useTheme } from './theme-provider';
import logo from '/logo.png';
import { useEffect } from 'react';
import { Burger } from './Burger';
import { Link } from './Link';

export function Navbar() {
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

	useEffect(() => {
		const toggle = (e: KeyboardEvent) => {
			if (e.altKey && e.code === 'KeyD') {
				e.preventDefault();
				toggleTheme();
			}
		};
		document.addEventListener('keydown', toggle);
		return () => document.removeEventListener('keydown', toggle);
	}, [toggleTheme]);

	useEffect(() => {
		const button = document.querySelector('.switch')!;
		const thumb = document.querySelector('.switch_thumb')!;
		button.setAttribute('data-state', theme === 'dark' ? 'checked' : 'unchecked');
		thumb.setAttribute('data-state', theme === 'dark' ? 'checked' : 'unchecked');
	}, [theme]);

	return (
		<nav className="sticky top-0 z-20 flex w-[100vw] select-none items-center justify-center gap-16 overflow-visible border-b-2 bg-background p-4 drop-shadow max-md:gap-0">
			<div className="flex items-center justify-center gap-4">
				<Burger />
				<img src={logo} className="App-logo h-8" alt="logo" />
				<h3 className="text-xl font-medium uppercase tracking-wide text-secondary max-md:hidden">
					Google GenAI Study Jams
				</h3>
				<h3 className="hidden text-xl font-medium uppercase tracking-wide text-secondary max-md:block">Study Jams</h3>
			</div>
			<div className="flex w-2/3 justify-end gap-11 text-xl uppercase">
				<Link href="https://developers.google.com/community/gdsc" text="Home" newTab className="max-md:hidden" />
				<Link href="#leaderboard" text="Leaderboard" className="max-md:hidden" />
				<Link href="#footer" text="About" className="max-md:hidden" />
				<Switch onClick={toggleTheme} />
			</div>
		</nav>
	);
}
