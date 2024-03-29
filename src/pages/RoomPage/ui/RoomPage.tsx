import { FC } from 'react';
import { RoomPageProps } from './RoomPage.props';
import cn from 'classnames';
import styles from './RoomPage.module.scss';
import { Room } from '@/widgets/Room';

const RoomPage: FC<RoomPageProps> = (props) => {

	const { className } = props;

	return (
		<div className={cn(styles.RoomPage, className)}>
			<Room />
		</div>
	);
};

export default RoomPage;