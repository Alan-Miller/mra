import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class StarWarsViewer extends React.Component {

  render() {
    console.log(this.props.people)
    return (
      <div>
        {this.props.people.length ? this.props.people.map((person, i) => (
          <div key={i}>{person.name}</div>
        )) : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps)(StarWarsViewer);