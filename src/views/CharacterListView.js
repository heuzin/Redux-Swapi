import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { loadingStart } from '../actions/index';

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.loadingStart()
  }

  render() {
    if (this.props.fetching) {
      return (
        <div>
          Loading
        </div>
      )
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}

const mapDispatchToProps = {
	loadingStart,
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

export default connect( mapStateToProps, mapDispatchToProps )(CharacterListView);
