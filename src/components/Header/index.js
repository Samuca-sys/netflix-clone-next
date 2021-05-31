import styles from './styles.module.css';

export function Header({ background }) {
	return (
		<header
			className={
				background ? `${styles.header} ${styles.black}` : `${styles.header}`
			}
		>
			<div className={styles.logo}>
				<a href='/'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
						alt='Netflix'
					/>
				</a>
			</div>
			<div className={styles.user}>
				<a href='/'>
					<img
						src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
						alt='Usuário'
					/>
				</a>
			</div>
		</header>
	);
}
