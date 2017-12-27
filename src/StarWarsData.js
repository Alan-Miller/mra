import React from 'react';
import axios from 'axios';
import { setPeople } from './redux/reducer';
import { connect } from 'react-redux';

class StarWarsData extends React.Component {

  componentDidMount() {
    this.props.history.push('/')
    // AXIOS
    axios.get('https://swapi.co/api/people')
    // axios.get('https://requestb.in/18j5yw81')
      .then(people => {
        console.log(people);
        this.props.setPeople(people.data.results); 
      });

    // XHR
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://swapi.co/api/people');
    xhr.onload = _ => { this.props.setPeople(JSON.parse(xhr.response).results); };
    xhr.send();
    
    // FETCH
    // fetch('https://swapi.co/api/people')
    //   // .then(people => {window.aam = people;})
    //   .then(people => people.json())
    //   .then(people => this.props.setPeople(people.results));
  }

  render() {
    console.log('HISTORY', this.props.history)
    return (
      <div>
        <p>This component gets SW data and puts it on Redux.</p>
        <p>The Viewer component subscribes to the data on Redux and displays it.</p>
      </div>

    )
  }
}

// function mapStateToProps() {

// }

// const mapDispatchToProps = {
// setPeople: setPeople
// }

export default connect(null, { setPeople: setPeople })(StarWarsData);