import React, { useState } from "react";
import styles from "./ImageCarousel.module.scss";
import classNames from "classnames";

type ImageCarouselProps = {
	src: string;
	alt: string;
};
export const ImageCarousel = ({ images }: { images: ImageCarouselProps[] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentImage = images[currentIndex];

	return (
		<div className={styles.imageCarousel}>
			<img
				src={currentImage.src}
				alt={currentImage.alt}
				className={styles.image}
			/>
			<button
				type="button"
				className={classNames(styles.button, styles.buttonPrevious)}
				aria-label="Previous image"
				onClick={() => {
					const previousIndex =
						(currentIndex - 1 + images.length) % images.length;
					setCurrentIndex(previousIndex);
				}}
			>
				&#10094;
			</button>
			<div className={styles.pages}>
				{images.map(({ src, alt }, index) => (
					<button
						type="button"
						key={src}
						aria-label={alt}
						className={classNames(styles.page, {
							[styles.pageActive]: index === currentIndex,
						})}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>
			<button
				type="button"
				className={classNames(styles.button, styles.buttonNext)}
				aria-label="Next image"
				onClick={() => {
					const nextIndex = (currentIndex + 1) % images.length;
					setCurrentIndex(nextIndex);
				}}
			>
				&#10095;
			</button>
		</div>
	);
};
