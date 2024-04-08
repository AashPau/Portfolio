import "./App.css";
import { BodySection } from "./Components/BodySection";
import { Contact } from "./Components/Contact";
import { Header } from "./Components/Header";
import { SkillsBox } from "./Components/SkillsBox";

function App() {
	return (
		<div className="container">
			<Header />
			<BodySection />
			<SkillsBox />
			{/* 			
			<Contact /> */}
		</div>
	);
}

export default App;
