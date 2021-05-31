import { IoIosPlay } from 'react-icons/io';
import { HiPlus } from 'react-icons/hi';

import styles from './styles.module.css';

export function Featured({ item }) {
	const firstDate = new Date(item.first_air_date);

	let genres = [];
	for (let genre in item.genres) {
		genres.push(item.genres[genre].name);
	}

	let description = item.overview;
	if (description.length > 200) {
		description = description.replace(/^(.{200}[^\s]*).*/, '$1') + '...';
	}

	return (
		<section
			className={styles.featured}
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
			}}
		>
			<div className={styles.verticalGradient}>
				<div className={styles.horizontalGradient}>
					<h1>{item.original_name}</h1>
					<div className={styles.info}>
						<span className={styles.points}>{item.vote_average} pontos</span>
						<span>{firstDate.getFullYear()}</span>
						<span>
							{item.number_of_seasons} temporada
							{item.number_of_seasons !== 1 && 's'}
						</span>
					</div>
					<p>{description}</p>
					<div className={styles.buttons}>
						<a href={`/watch/${item.id}`} className={styles.watchButton}>
							<button>
								<IoIosPlay /> Assistir
							</button>
						</a>
						<a href={`/list/add/${item.id}`} className={styles.myListButton}>
							<button>
								<HiPlus /> Minha Lista
							</button>
						</a>
					</div>

					<p className={styles.genres}>
						<strong>Gênero{genres.length > 1 && 's'}: </strong>
						{genres.join(', ')}
					</p>
				</div>
			</div>
		</section>
	);
}
