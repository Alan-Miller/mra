import React from 'react';
import axios from 'axios';
import { setPeople } from './redux/reducer';
import { connect } from 'react-redux';

class StarWarsData extends React.Component {

  componentDidMount() {
    axios.get('https://swapi.co/api/people')
    .then(people => {
      // console.log(people.data.results);
      this.props.setPeople(people.data.results);
    });
  }

  render() {
    // console.log('HISTORY', this.props.history)
    return (
      <div>DATA</div>
    )
  }
}

// function mapStateToProps() {

// }

// const mapDispatchToProps = {
  // setPeople: setPeople
// }

export default connect(null, { setPeople: setPeople })(StarWarsData);