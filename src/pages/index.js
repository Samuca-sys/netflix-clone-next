import { useState, useEffect } from 'react';

import Head from 'next/head';

import { getHomeList, getMovieInfo } from '../services/api.js';

import { Featured } from '../components/Featured/index.js';
import { Header } from '../components/Header/index.js';
import { MovieRow } from '../components/MovieRow/index.js';

import styles from '../../styles/Home.module.css';

export default function Home({ list }) {
	const [featuredData, setFeaturedData] = useState(null);
	const [blackHeader, setBlackHeader] = useState(false);

	useEffect(() => {
		const loadAll = async () => {
			try {
				//Get Feature data
				let originals = list.filter((item) => item.slug === 'originals');
				let randomChosen = Math.floor(
					Math.random() * originals[0].items.results.length - 1
				);
				let chosen = originals[0].items.results[randomChosen];
				let chosenInfo = await getMovieInfo(chosen.id, 'tv');

				setFeaturedData(chosenInfo);
			} catch (error) {
				console.log(error, 'Error getting home data');
			}
		};

		loadAll();
	}, []);

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 10) {
				setBlackHeader(true);
			} else {
				setBlackHeader(false);
			}
		};

		window.addEventListener('scroll', scrollListener);

		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix</title>
				<meta name='description' content='Netflix clone home' />
			</Head>
			<Header background={blackHeader} />

			{featuredData && <Featured item={featuredData} />}
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
