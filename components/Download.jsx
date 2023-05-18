import { isMobile } from "react-device-detect";

export const Download = () => {
	if (!isMobile) {
		return (
			<div className="flex items-center justify-end w-full print:hidden">
				<button
					className="flex items-center gap-2 p-1 btn-ghost"
					onClick={() => window.print()}
				>
					Télécharger
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						className="w-4 h-4"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
						/>
					</svg>
				</button>
			</div>
		);
	}
	return <></>;
};
