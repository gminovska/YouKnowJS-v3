import React from 'react';
import PropTypes from 'prop-types';

import Answer from '../components/Answer';

class Question extends React.Component {
  static propTypes = {
    question: PropTypes.shape({
      answers: PropTypes.array,
      explanation: PropTypes.string,
      multipleChoice: PropTypes.bool,
      text: PropTypes.string,
    }).isRequired,
    nextQuestion: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.length = this.props.question.answers.length;
    this.state = {
      answers: new Array(this.length).fill(false),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.length = nextProps.question.answers.length;
    this.setState({
      answers: new Array(this.length).fill(false),
    });
  }

  handleChange = (i) => {
    const answers = new Array(this.length).fill(false);
    answers[i] = true;
    this.setState({ answers });
  }

  render() {
    const { question, nextQuestion, buttonText } = this.props;
    const { text, answers } = question;

    return (
      <div>
        <p>{text}</p>
        {answers.map((answer, index) => (
          <Answer
            index={index}
            key={answer.text}
            text={answer.text}
            checked={this.state.answers[index]}
            onChange={this.handleChange}
          />
        ))}
        {/* TODO: implement logic for keeping track of the number of correct answers user has provided */}
        <button onClick={nextQuestion}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default Question;
