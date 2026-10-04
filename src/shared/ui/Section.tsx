import SectionType from "@/src/domain/sections/SectionType";
import Image from "next/image";
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
			<div className={styles.body}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.content}>{content}</p>
				<Image
					src={`/assets/images/${icon}`}
					alt=""
					width={50}
					height={50}
					className={styles.icon}
				/>
			</div>
		</section>
	);
}
