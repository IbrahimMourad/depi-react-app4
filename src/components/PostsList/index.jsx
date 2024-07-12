import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Post from './Post';

const PostsList = ({ search }) => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setDisplayData(data);
      });
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      const newData = data?.filter((post) => post.title.includes(search));
      setDisplayData(newData);
    } else setDisplayData(data);
  }, [search]);

  return (
    <Container>
      {displayData.length && <p>{displayData.length}</p>}
      <Row>
        {displayData?.map((post) => (
          <Col md={4} key={post.id}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostsList;
