import createStore from 'redux-zero';

let playlist = [
    {
        title: "Pursuit Of Happiness",
        artist: "Kid Cudi",  
        duration: "6:13"
    },
    {
        title: "Wait",
        artist: "Nombe",  
        duration: "3:34"
    },
    {
        title: "Zillionaire",
        artist: "Flo RiDa",  
        duration: "3:52"
    }
];

const initialState = {
    playlist: playlist,
    actualSong : 0,
    play: false
}

const store = createStore(initialState);

export default store; 