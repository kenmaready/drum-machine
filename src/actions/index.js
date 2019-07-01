const SET_CURRENT_SOUND = 'SET_CURRENT_SOUND';

export let setCurrentSound = (sound) => {
    return { type: SET_CURRENT_SOUND, payload: sound };
};

