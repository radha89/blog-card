import styles from "../../styles/BlogCard.module.css";
export function BlogCard() {
	return (
		<>
			<div className={styles.blogCard}>
				<div className={styles.blogCardImage} />
				<div className={styles.blogCardContent}>
					<div className={styles.blogCardBadge}>Interior</div>
					<h1 className={styles.blogCardTitle}>
						Top 5 Living Room Inspirations
					</h1>
					<p className={styles.blogCardSubtext}>
						Curated vibrant colors for your living, make it pop & calm at the
						same time.
					</p>

					<a
						className={styles.blogCardLink}
						href="https://react.dev"
						target="_blank"
					>
						Read more
						<img src="/arrowIcon.svg" alt="arrow right icon" />
					</a>
				</div>
			</div>
		</>
	);
}
