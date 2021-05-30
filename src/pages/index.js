import React, { useEffect } from 'react';

import Head from 'next/head';

import { getHomeList } from '../services/api.js';

import styles from '../../styles/Home.module.css';

export default function Home() {
	useEffect(() => {
		const loadAll = async () => {
			//Get all the list
			let list = await getHomeList();
			console.log(list);
		};

		loadAll();
	}, []);

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
