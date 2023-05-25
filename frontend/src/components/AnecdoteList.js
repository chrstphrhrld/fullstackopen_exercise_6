import { useDispatch, useSelector } from "react-redux";
import { likeAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
	const anecdotes = useSelector(state => {
		return state.anecdotes.filter(a => a.content.includes(state.filter))
	})
	const dispatch = useDispatch()

	const vote = (id) => {
		dispatch(likeAnecdote(id))
	}

	return (
		<div>
			{ anecdotes.sort((a1, a2) => (
				a1.votes > a2.votes ? -1 : 1)).map(anecdote =>
				<div key={ anecdote.id }>
					<div>
						{ anecdote.content }
					</div>
					<div>
						has { anecdote.votes }
						<button onClick={ () => vote(anecdote.id) }>vote</button>
					</div>
				</div>
			) }
		</div>
	)
}

export default AnecdoteList