import Head from 'next/head';

import { getHomeList } from '../services/api.js';

import styles from '../../styles/Home.module.css';

import { MovieRow } from '../components/MovieRow/index.js';

export default function Home({ list }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix</title>
				<meta name='description' content='Netflix clone home' />
			</Head>

			<section className={styles.lists}>
				{list.map((item, key) => (
					<MovieRow key={key} title={item.title} items={item.items} />
				))}
			</section>
		</div>
	);
}

export async function getStaticProps() {
	//Get all the list
	let list = await getHomeList();

	return {
		props: {
			list,
		},
		revalidate: 60 * 60 * 24, //1 day
	};
}
