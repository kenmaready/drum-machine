import React from 'react';
import { connect } from 'react-redux';

import "./SoundPad.css";
import { setCurrentSound } from '../actions';

class SoundPad extends React.Component {

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.keyCode === this.props.triggerKey.charCodeAt(0)) {
            this.onSoundClick(event);
        };
    }

    onSoundClick = (event) => {
        let sound = document.getElementById(this.props.triggerKey);
        this.props.setCurrentSound(this.props.name);
        sound.currentTime = 0;
        sound.play();
    }

    render() {
        return (
            <div>
                <div onClick={this.onSoundClick} className="drum-pad" id={this.props.soundFile}>
                    <p>{this.props.triggerKey}</p>
                    <audio className="clip" id={this.props.triggerKey} src={this.props.soundFile}></audio>
                </div>
            </div>
        );
    }
}

export default connect(null, { setCurrentSound : setCurrentSound })(SoundPad);