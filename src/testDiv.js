import React from 'react';
import { useSelector } from 'react-redux';

const testSelector = state => state.identity;

const TestDiv = () => {
  const data = useSelector(testSelector);

  return (
    <div>{data}</div>
  )
};

export default TestDiv;