import React from 'react';
import Card from 'react-bootstrap/Card';

const Post = ({ post }) => {
  return (
    <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
