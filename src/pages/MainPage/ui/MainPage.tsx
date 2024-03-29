import { FC } from 'react';
import { MainPageProps } from './MainPage.props';
import cn from 'classnames';
import styles from './MainPage.module.scss';
import { Rooms } from '@/widgets/Rooms';

const MainPage: FC<MainPageProps> = (props) => {


	return (
		<div

			className={cn(styles.MainPage)}>
			<Rooms />
		</div>
	);
};

export default MainPage;