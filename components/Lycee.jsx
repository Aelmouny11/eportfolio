import Image from "next/image";
import { title } from "process";
import { Fragment, useState } from "react";
import { HiOutlineArrowsExpand } from "react-icons/hi";

export const CardGallery = () => {
	const images = [
		{ name: "sport", path: "/sport.jpg" },
		{ name: "pavement", path: "/pavement.jpg" },
		{ name: "lobby", path: "/lobby.jpg" },
		{ name: "bts", path: "/bts.jpg" },
	];

	return (
		<div className="flex flex-wrap gap-4 justify-evenly py-2">
			{images.map((image, index) => (
				<Card
					img={`/iloveimg-compressed${image.path}`}
					alt={`Image ${index}`}
					text={image.name}
					key={index}
				/>
			))}
		</div>
	);
};
export const Card = ({ img, text }) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<Fragment>
			<div className="relative w-full sm:w-96 h-96 group ">
				<Image src={img} fill alt={text} />
				<div className="absolute flex-col items-center justify-center hidden w-full h-full transition duration-700 rounded-xl bg-slate-800/40 group-hover:flex">
					{" "}
					<h1 className="text-4xl font-extrabold text-blue-400 uppercase">
						{text}
					</h1>
					<button
						onClick={() => setOpen(true)}
						className="absolute btn bg-slate-300/20 bottom-2 right-2"
					>
						<HiOutlineArrowsExpand size={24} />
					</button>
				</div>
			</div>
		</Fragment>
	);
};
