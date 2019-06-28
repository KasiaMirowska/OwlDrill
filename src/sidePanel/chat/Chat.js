import React from 'react';

export default class Chat extends React.Component {
    render() {

        const { events, participants } = this.props;
        const chat = events.map(event => {

            const participant = participants.find(participant => {
                return event.participantId === participant.id
            });

            return {
                name: participant.name,
                inSession: participant.inSession,
                type: event.type,
                message: event.message,
                time: event.timestamp,
            }
        });

        console.log(chat)
        const renderChat = chat.map((person, i) => {
            return (
                <div key={i}>
                    {person.name}
                    {person.inSession}
                    {person.type}
                </div>
            )
        })
        return (
            <div>
                {renderChat}
            </div>
        )
    }

}