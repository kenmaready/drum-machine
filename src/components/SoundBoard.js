import React from 'react';
import { connect } from 'react-redux';

import "./SoundBoard.css";
import SoundPad from './SoundPad.js';
import sounds from '../sounds';


const keyPad = ["Q","W","E",
                "A","S","D",
                "Z","X","C"];

class SoundBoard extends React.Component {

    renderSoundGrid() {     
        let soundGrid = sounds.map( (sound, index) => {
            return (
                <div key={sound.soundFile} className="five wide column">
                    <SoundPad name={sound.name} soundFile={sound.soundFile} triggerKey={keyPad[index]} />
                </div>
            );
        } );
        return soundGrid;
    }


    render() {
        return (
            <div className='ui segment soundBoard' id="drum-machine">
                <div id="display" className="ui segment">{this.props.currSound}</div>
                <div className="ui three column centered grid">
                    {this.renderSoundGrid()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { currSound : state.currSound }
}

export default connect(mapStateToProps)(SoundBoard); 