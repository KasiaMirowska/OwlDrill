import React from 'react';
import Chat from './chat/Chat'

export default class SidePanel extends React.Component {
    
    renderParticipant = () => {
        return this.props.participants.map(participant => {
            return (
                <li key={participant.id}>
                {participant.name}
                </li>
                
            )
        })
    }

    render(){
        return (
            <div>
                <h1>Participants: </h1>
                {this.renderParticipant()}
                <Chat participants={this.props.participants} events={this.props.chatEvents}/>
                </div>
        )
    }
        
    
}