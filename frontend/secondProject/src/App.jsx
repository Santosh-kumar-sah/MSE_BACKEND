import { useState } from 'react'
import './App.css'

function App() {
	const [text, setText] = useState('')

	const toUpper = () => setText((t) => t.toUpperCase())
	const toLower = () => setText((t) => t.toLowerCase())
  const clearText = () => setText('')

	return (
		<div id="center">
			<div className="text-manipulator">
				<h1>Text Manipulator</h1>
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Enter your text here"
					rows={8}
				/>
				<div className="controls">
					<button className="btn" onClick={toUpper}>Uppercase</button>
					<button className="btn" onClick={toLower}>Lowercase</button>
					<button className="btn" onClick={clearText}>Clear</button>
					<div className="stats">
						<span className="stat-item">Characters: {text.length}</span>
						<span className="stat-item">Words: {text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
