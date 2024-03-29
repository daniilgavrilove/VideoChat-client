import { io } from 'socket.io-client';

const options = {
	'force new connection': true,
	reconnectionAttempts: 1000000000000000, // avoid having user reconnect manually in order to prevent dead clients after a server restart
	timeout: 10000, // before connect_error and connect_timeout are emitted.
	transports: ['websocket']
};

export const socket = io(`${process.env.REACT_APP_BASE_URL}`, options);

