import { useState } from 'react';

import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import styles from './styles.module.css';

export function MovieRow({ title, items }) {
	const [scrollX, setScrollX] = useState(0);
	const [displayLeft, setDisplayLeft] = useState('none');
	const [displayRight, setDisplayRight] = useState('flex');

	const handleLeftArrow = () => {
		let x = scrollX + Math.round(window.innerWidth / 2);
		if (x >= 0) {
			x = 0;
			setDisplayLeft('none');
		}
		setDisplayRight('flex');
		setScrollX(x);
	};

	const handleRightArrow = () => {
		let x = scrollX - Math.round(window.innerWidth / 2);
		let listW = items.results.length * 150;
		if (window.innerWidth - listW > x) {
			x = window.innerWidth - listW - 60;
			setDisplayRight('none');
		}
		setDisplayLeft('flex');
		setScrollX(x);
	};

	return (
		<div className={styles.movieRow}>
			<h2>{title}</h2>

			<div
				className={styles.leftArrow}
				onClick={handleLeftArrow}
				style={{ display: displayLeft }}
			>
				<MdNavigateBefore size={50} />
			</div>

			<div
				className={styles.rightArrow}
				onClick={handleRightArrow}
				style={{ display: displayRight }}
			>
				<MdNavigateNext size={50} />
			</div>

			<div className={styles.listArea}>
				<div
					className={styles.list}
					style={{
						marginLeft: scrollX,
						width: items.results.length * 150,
					}}
				>
					{items.results.length > 0 &&
						items.results.map((item, key) => (
							<div key={key} className={styles.item}>
								<img
									src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
									alt={item.name}
								></img>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
