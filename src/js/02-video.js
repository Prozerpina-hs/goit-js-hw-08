import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = "videoplayer-current-time";

// Сохраняет время воспроизведения в локальное хранилище.
const onPlay = function({seconds}) {
 localStorage.setItem(TIME_KEY, seconds);
};

// Обновляет время воспроизведения
player.on('timeupdate', throttle(onPlay, 1000));

// Возобновляет воспроизведение с сохраненной позиции.
const currentTime = localStorage.getItem(TIME_KEY);

if(currentTime === null){
     return;
    }else{
      console.log(JSON.parse(currentTime));
      player.setCurrentTime(currentTime);
    }
