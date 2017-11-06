import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class StarWarsViewer extends React.Component {

  render() {
    // console.log('people', this.props.people);
    console.log('refs', this.refs[0]);
    return (
      <div>
        {this.props.people.length ? this.props.people.map((person, i) => (
          <div key={i} ref={i}>{person.name}</div>
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