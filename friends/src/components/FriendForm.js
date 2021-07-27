import React from 'react';
import axiosWithAuth from '../Utils/axiosWithAuth';

class FriendForm extends React.Component {
    state = {
        newFriend: {
            id: 0,
            name: '',
            age: '',
            email: ''
        }
    };

    handleChange = e => {

        const { name, value} = e.target;

        this.setState({
            newfriend: {
                ...this.state.newfriend,
                [name]: (name === 'age') ? Number(value) : value
            }
        });
        // console.log(this.state)
    };

    submit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', this.state.friend)
            .then(res => {
                console.log(res);
                this.props.history.push('/friends');
            })

            .catch(err => {
                console.log(err);
            })

    };

    render () {
        console.log(this.state)
        return (
                <div>
                    <form onSubmit={this.submit}>
                        <div>
                            <label>Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name"
                                value={this.state.friend.name}
                                onChange={this.handleChange}
                            />
                            <label>Age:</label>
                            <input 
                                type="age" 
                                name="age" 
                                placeholder="Age"
                                value={this.state.friend.age}
                                onChange={this.handleChange}
                            />
                            <label>Email:</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email"
                                value={this.state.friend.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button>Add New Friend</button>
                    </form>
                </div>
        );
    }
}

export default FriendForm;