import { FC } from 'react';
import { RoomProps } from './Room.props';
import { useParams } from 'react-router-dom';
import { LOCAL_VIDEO, useWebRTC } from '@/features/VideoChat/lib/hooks/useWebRTC';
import { videoLayout } from '@/pages/RoomPage/functions/videoLayout/videoLayout';

export const Room: FC<RoomProps> = (props) => {

	const { className } = props;
	const { id: roomID } = useParams();
	const { clients, provideMediaRef } = useWebRTC(roomID);
	const videoLayoutRoom = videoLayout(clients.length);


	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexWrap: 'wrap',
			height: '100vh'
		}}>
			{clients.map((clientID: string, index: number) => {
				return (
					<div
						key={clientID}
						style={videoLayoutRoom[index]}
						id={clientID}>
						<video
							width="100%"
							height="100%"
							ref={instance => {
								provideMediaRef(clientID, instance);
							}}
							autoPlay
							playsInline
							muted={clientID === LOCAL_VIDEO}
						/>
					</div>
				);
			})}
		</div>
	);
};