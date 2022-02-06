import React from "react";
import axios from "axios";

class App extends React.Component {
	state = {
		students: [],
		loading: true,
	};

	componentDidMount = async () => {
		const response = await axios.get("http://localhost:5000/api/students");

		this.setState({
			students: response.data,
			loading: false,
		});
	};

	render() {
		const { students, loading } = this.state;
		console.log(students);
		return (
			<>
				{loading ? (
					<h1>Loading.....</h1>
				) : (
					students &&
					students.map((person, i) => {
						return (
							<div key={i}>
								<div>{person.id}</div>
								<div>{person.first_name}</div>
								<div>{person.last_name}</div>
								<div>{person.gender}</div>
							</div>
						);
					})
				)}
			</>
		);
	}
}

export default App;
