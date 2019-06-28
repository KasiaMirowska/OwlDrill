import React from 'react';
import './App.css';
import SidePanel from './sidePanel/SidePanel';
import Data from './data';
import Screen from './screen/Screen';

export default class App extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props);
  }
  render(){
    return (
      <div>
       <SidePanel participants={Data.participants} chatEvents={Data.chatEvents} />
       <Screen participants={Data.participants} />
      </div>
    );
  }
  
}


