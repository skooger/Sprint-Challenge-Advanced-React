import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import PlayerCard from './Components/PlayerCard';
import {Card,CardBody,CardSubtitle,CardTitle} from 'reactstrap';

class App extends React.Component {

  state = {
    players: []

  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        // res.data.message
        this.setState({
          players: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render(){
    return (
      <div>
          <div className="Players-Container">
            {this.state.players.map(player => 
              <div className="Player-Container">
                <Card>
                  <CardBody>
                    <CardTitle>Player: {player.name}</CardTitle>
                    <CardSubtitle>Country: {player.country}</CardSubtitle>
                    <CardSubtitle>Searches: {player.searches}</CardSubtitle>
                  </CardBody>
                </Card>
              </div>

            )}
          </div>
      </div>

    );

  }

}

export default App;
