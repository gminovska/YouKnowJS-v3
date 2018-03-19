import React from 'react';

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      displayExplanation: false,
    };
  }

  switchViews = () => {
    this.setState({ displayExplanation: !this.state.displayExplanation });
  }

  render() {
    const { displayExplanation } = this.state;

    return (
      displayExplanation
        ? <div>Question Component</div>
        : <div>Explanation Component</div>
    );
  }
}
