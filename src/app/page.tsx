import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<header className={styles.header}>
				<h2 className={styles.subheading}>
					Reliable, efficient delivery
				</h2>
				<h1 className={styles.heading}>Powered by Technology</h1>
			</header>
		</main>
	);
}
