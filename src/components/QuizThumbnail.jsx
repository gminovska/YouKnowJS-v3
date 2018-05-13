import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button, Image } from 'semantic-ui-react';

const QuizThumbnail = ({ description, name, id, img }) => (
  <Card raised >
    <Image style={{ height: '300px', objectFit: 'scale-down' }} size="medium" src={img} />
    <Card.Content>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link to={`/quiz/${id}`}>
        <Button inverted secondary>
          Take quiz
        </Button>
      </Link>
    </Card.Content>
  </Card>
);

QuizThumbnail.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default QuizThumbnail;
