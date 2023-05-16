import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="grid min-h-screen px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
				<div className="flex flex-col justify-center gap-4">
					<h1 className="mb-6 text-3xl font-bold uppercase md:text-5xl lg:text-7xl">
						<span className="text-blue-500">Elmoumny</span>{" "}
						<span className="">Azddine</span>
					</h1>
					<p className="mb-8 text-lg sm:text-xl md:text-2xl ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Ut semper porttitor velit non malesuada. Fusce sit amet
						lacus sit amet quam pharetra feugiat. éé
					</p>
					<div>
						<Link
							href="/msp"
							className="inline-block px-6 py-3 mr-4 font-semibold text-white transition duration-500 ease-in-out bg-blue-500 rounded-lg lg:py-5 hover:bg-blue-600"
						>
							Call to Action
						</Link>
						<Link
							href="/msp"
							className="inline-block px-6 py-3 font-semibold text-blue-500 transition duration-500 ease-in-out bg-transparent border border-blue-500 rounded-lg lg:py-5 hover:bg-blue-500 hover:text-white"
						>
							Secondary Action
						</Link>
					</div>
				</div>
				<div className="relative flex justify-center md:justify-end">
					<div
						className="rounded-[4rem] h-64 w-64 md:h-full md:w-full absolute blur-lg -z-1 bg-gradient-to-r from-indigo-500 via-green-600 to-violet-500"
						style={{ filter: "blur(10px)" }}
					></div>
					<Image
						src="/photo.jpg"
						alt="Hero Image"
						className="rounded-[4rem] h-64 w-64 md:h-80 md:w-80 z-10 m-1"
						layout="responsive"
						width={400}
						height={400}
						priority={true}
					/>
				</div>
			</div>
		</div>
	);
};
export default HeroSection;
