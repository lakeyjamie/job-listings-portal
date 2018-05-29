import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination';

var numItems = 12;
test('Number of items => 12', () => {
    expect(numItems).toBe(12);
});

it('Pagination renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Pagination 
      handleNextButtonClick={function(a){return a;}}
      next="url"
	    previous="url"
    />,
     div);
  ReactDOM.unmountComponentAtNode(div);
});
