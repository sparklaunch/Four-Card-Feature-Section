import SectionType from "@/src/domain/sections/SectionType";
import styles from "./Section.module.css";

export default function Section({ section }: { section: SectionType }) {
	const { color, title, content, icon } = section;
	return (
		<section
			className={styles.section}
			style={{
				gridArea: color
			}}
		>
			<div
				className={styles.stripe}
				style={{
					backgroundColor: `var(--color-${color})`
				}}
			/>
			<div>
				<h3>{title}</h3>
			</div>
		</section>
	);
}
