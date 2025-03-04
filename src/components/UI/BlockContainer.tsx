import { useEffect, useRef } from 'react';

export default function BlockContainer() {
	const blockContainer = useRef<HTMLDivElement>(null);
	const blockSize = 50;
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	const rows = Math.ceil(screenHeight / blockSize);
	const cols = Math.ceil(screenWidth / blockSize);
	const numBlocks = rows * cols;
	useEffect(() => {
		// Create all blocks
		console.log('render');

		function addBlocks() {
			if (blockContainer.current) {
				blockContainer.current.innerHTML = '';
			}

			for (let row = 0; row < rows; row++) {
				for (let col = 0; col < cols; col++) {
					const index = row * cols + col;
					const block = document.createElement('div');
					block.classList.add('block-item');
					block.dataset.index = index.toString();
					blockContainer.current?.appendChild(block);
				}
			}
		}

		// Highlight block based on mouse position
		function highlightBlockByPosition(e: MouseEvent) {
			if (!blockContainer.current) return;
			// Calculate which block corresponds to current mouse position
			const mouseX = e.clientX;
			const mouseY = e.clientY;

			// Calculate row and column from mouse position
			const col = Math.floor(mouseX / blockSize);
			const row = Math.floor(mouseY / blockSize);

			// Convert to block index
			const index = row * cols + col + row;

			// Only proceed if index is valid
			if (index >= 0 && index < numBlocks && blockContainer.current) {
				// console.log('🟩 ~ highlightBlockByPosition ~ index:', index);

				const block = blockContainer.current.children[index] as HTMLElement;

				if (block) {
					// Highlight the main block
					block.classList.add('highlight');
					setTimeout(() => {
						block.classList.remove('highlight');
					}, 300);

					// Find and highlight neighbors
					const ratio = 1;
					const neighbors = [
						index - ratio,
						index + ratio,
						index - cols,
						index + cols,
						index - cols - ratio,
						index - cols + ratio,
						index + cols - ratio,
						index + cols + ratio,
					].filter(neighbor => {
						return (
							neighbor >= 0 &&
							neighbor < numBlocks &&
							Math.abs((neighbor % cols) - (index % cols)) <= 1
						);
					});

					// Shuffle and pick one neighbor
					shuffleArray(neighbors)
						.slice(0, 1)
						.forEach(nIndex => {
							if (blockContainer.current) {
								const neighbor = blockContainer.current.children[
									nIndex
								] as HTMLElement;
								if (neighbor) {
									neighbor.classList.add('highlight');
									setTimeout(() => {
										neighbor.classList.remove('highlight');
									}, 300);
								}
							}
						});
				}
			}
		}

		function shuffleArray(array: number[]) {
			const newArray = [...array]; // Create a copy to avoid mutating the original
			for (let i = newArray.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
			}
			return newArray;
		}

		// Add blocks
		addBlocks();

		// Add global mousemove listener
		document.addEventListener('mousemove', highlightBlockByPosition);

		// Cleanup
		return () => {
			document.removeEventListener('mousemove', highlightBlockByPosition);
		};
	}, [cols, numBlocks, rows]);

	return (
		<div className="block-container xl:block hidden">
			<div ref={blockContainer} id="block"></div>
		</div>
	);
}
