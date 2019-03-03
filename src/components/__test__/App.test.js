import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', ()=> {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    // Look into the div and check if CommentBox is in there
    console.log(div.innerHTML);
    ReactDOM.unmountComponentAtNode(div);

});