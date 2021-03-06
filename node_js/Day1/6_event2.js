const events = require('events');

// 이벤트 관련 메소드를 사용할 수 있는 EventEmitter 객체를 생성
const eventEmitter = new events.EventEmitter();

const connectHandler = function connected(){
    console.log('연결 성공!');
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', () => {
    console.log('데이터 수신');
});

eventEmitter.emit('connection');
console.log('프로그램 종료');



