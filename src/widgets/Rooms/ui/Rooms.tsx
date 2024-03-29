import { FC, useEffect, useRef, useState } from 'react';
import { RoomsProps } from './Rooms.props';
import cn from 'classnames';
import styles from './Rooms.module.scss';
import { socket } from '@/features/VideoChat/model/api/socket';
import { ACTIONS } from '@/features/VideoChat';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';

export const Rooms: FC<RoomsProps> = (props) => {

	const { className } = props;
	const navigate = useNavigate();
	const [rooms, updateRooms] = useState([]);
	const rootNode = useRef(null);

	useEffect(() => {
		socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
			if (rootNode.current) {
				updateRooms(rooms);
			}
		});
	}, []);

	return (
		<div
			ref={rootNode}
			className={cn(styles.Rooms, className)}>
			<h1>Available Rooms</h1>
			<ul>
				{rooms.map(roomID => (
					<li key={roomID}>
						{roomID}
						<button onClick={() => {
							navigate(`/room/${roomID}`);
						}}>JOIN ROOM
						</button>
					</li>
				))}
			</ul>
			<button onClick={() => {
				navigate(`/room/${v4()}`);
			}}>Create New Room
			</button>
		</div>
	);
};