import React from 'react';
import axiosWithAuth from '../Utils/axiosWithAuth';

class FriendList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
  
                this.setState({
                    ...this.state,
                    friends: res.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

   

    render() {
        return (
            <div>
                {/* <button onClick={this.addFriend}>Add A New Friend</button> */}
                {this.state.friends.map(friend => (
                    <div key={friend.id}>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        <p>---------------</p>
                    </div>
                )
                )}
            </div>
        )
    }
}

export default FriendList;