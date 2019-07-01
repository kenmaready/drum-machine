import bassDrum from './drum_bass.wav';
import snareDrum from './drum_snare.wav';
import highTom from './tomtom_hi.wav';
import lowTom from './tomtom_low.wav';
import closedHighHat from './high_hat_closed.wav';
import crashCymbal from './crash_cymbal.wav';
import orchestraHit from './orchestra_hit.wav';
import orchestraHit2 from './orchestra_hit2.wav';
import choir from './choir.wav';

const sounds = [
    {name: "bass drum", soundFile: bassDrum}, 
    {name: "snare drum", soundFile: snareDrum},
    {name: "high tom", soundFile: highTom},
    {name: "low tom", soundFile: lowTom},
    {name: "closed high hat", soundFile: closedHighHat},
    {name: "crash cymbal", soundFile: crashCymbal},
    {name: "orchestra hit", soundFile: orchestraHit},
    {name: "orchestra hit 2", soundFile: orchestraHit2},
    {name: "choir", soundFile: choir}
]

export default sounds;