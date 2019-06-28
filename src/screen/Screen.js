import React from 'react';

export default class Screen extends React.Component {
    
    renderScreen = () => {
        return this.props.participants.filter(participant => participant.onStage === true).map(participant => {
            return (
                <li key={participant.id}>
                    {participant.name}
                    <img src={participant.avatar} alt='avatar' />
                </li>
            )
        }) 
    }
    
    
    render(){
        return (
            <div>{this.renderScreen()}</div>
        )
    }
          
}