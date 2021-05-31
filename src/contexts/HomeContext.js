import { createContext, useState, useEffect } from 'react';

export const HomeContext = createContext();

export function HomeContextProvider({ children }) {
	const [blackHeader, setBlackHeader] = useState(false);

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
		<HomeContext.Provider value={{ blackHeader }}>
			{children}
		</HomeContext.Provider>
	);
}
