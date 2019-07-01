import React from 'react';

import SoundBoard from './SoundBoard.js';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <h1>Drum Machine.</h1>
                <SoundBoard />
            </div>
        );
    }
}

export default App;