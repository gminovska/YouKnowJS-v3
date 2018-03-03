import React from 'react';
import PropTypes from 'prop-types';

import AnswersView from '../components/question_views/AnswersView';
import ExplanationView from '../components/question_views/ExplanationView';

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
    isLastQuestion: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.length = this.props.question.answers.length;
    this.state = {
      answers: new Array(this.length).fill(false),
      displayExplanation: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.length = nextProps.question.answers.length;
    this.setState({
      answers: new Array(this.length).fill(false),
    });
  }

  changeViews = () => {
    this.setState({ displayExplanation: !this.state.displayExplanation });
  }

  handleChange = (i) => {
    const answers = new Array(this.length).fill(false);
    answers[i] = true;
    this.setState({ answers });
  }

  render() {
    const { question, nextQuestion, buttonText, isLastQuestion } = this.props;
    const { text, answers, explanation } = question;
    const getNextQuestion = () => {
      nextQuestion();
      if (!isLastQuestion) {
        this.changeViews();
      }
    };

    const answersView = (
      <AnswersView
        questionText={text}
        answers={answers}
        checked={this.state.answers}
        handleChange={this.handleChange}
        seeExplanation={this.changeViews}
      />
    );

    const explanationView = (
      <ExplanationView
        explanationText={explanation}
        nextQuestion={getNextQuestion}
        buttonText={buttonText}
      />
    );

    return (
      <div>
        {this.state.displayExplanation ? explanationView : answersView}
        {/* TODO: implement logic for keeping track of the number of correct answers user has provided */}
      </div>
    );
  }
}

export default Question;
