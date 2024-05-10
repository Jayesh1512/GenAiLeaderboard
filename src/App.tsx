import "./App.css";
import { Navbar } from "./components/Navbar";
import { Details } from "./components/Details";
import { Footer } from "./components/Footer";
import LeaderboardUI from './components/LeaderboardUI'


function App() {
	return (
		<>
			<Navbar />
			<Details />
			<LeaderboardUI />
			<Footer />
		</>
	);
}

export default App;
