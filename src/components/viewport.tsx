import { Box, useStdout } from 'ink';
import type { ReactNode } from 'react';

type ViewportProps = {
	children: ReactNode;
};

/**
 * Fixed-height viewport that fills the terminal minus the header and footer chrome.
 * Content overflows hidden — screens should handle their own scrolling within this box.
 */
export default function Viewport({children}: ViewportProps) {
	const {stdout} = useStdout();
	const rows = stdout?.rows ?? 24;

	// Reserve: header border box (3 rows) + 1 bottom margin
	const viewportHeight = Math.max(10, rows - 4);

	return (
		<Box
			flexDirection="column"
			height={viewportHeight}
			overflowY="hidden"
		>
			{children}
		</Box>
	);
}

export function useViewportHeight(): number {
	const {stdout} = useStdout();
	const rows = stdout?.rows ?? 24;
	return Math.max(10, rows - 4);
}
