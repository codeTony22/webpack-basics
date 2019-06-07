import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import { AppContainer } from 'react-hot-loader';
window.React = React;


function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Counter/>
        </AppContainer>,
        document.getElementById('react-root')
    )
}

render(Counter)

if(module.hot) {
    module.hot.accept("./counter.js", () => {
        const NewCounter = require('./counter.js').default
        render(NewCounter)
    })
}