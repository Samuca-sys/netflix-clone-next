import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix</title>
				<meta name='description' content='Netflix clone home' />
			</Head>
			<h1>Hello World!</h1>
		</div>
	);
}
