import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import TextFilter from "./TextFilter";

const App = () => {
	return (
		<div>
			<h2>Anecdotes</h2>
			<TextFilter/>
			<AnecdoteList/>
			<AnecdoteForm/>
		</div>
	)
}

export default App