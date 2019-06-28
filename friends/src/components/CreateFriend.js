import React from 'react';

class CreateFriend extends React.Component {
    state = {
			name: '',
			age: '',
			email: ''
		}

		handleChange = (evt)=> {
			this.setState({
					[evt.target.value]: evt.target.value
			})
		}
		
		createFriend = (e) => {
			e.preventDefault()
		}

    render() {
			const { name, age, email } = this.state

			return (
				<form onSubmit={this.createFriend}>
					<h1>Add New Friend</h1>
					<input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
					<input type="text" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
					<input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
					<input type="submit" name="Submit" />
				</form>
			)
    }
}

export default CreateFriend