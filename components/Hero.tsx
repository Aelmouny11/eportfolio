import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="grid min-h-screen px-1 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
				<div className="flex flex-col justify-center gap-4">
					<h1 className="mb-6 text-3xl font-bold uppercase md:text-5xl lg:text-7xl 	">
						<span className="text-blue-500">Elmoumny</span>{" "}
						<span className="">Azddine</span>
					</h1>
					<p className="mb-8 text-lg sm:text-xl md:text-2xl ">
						Motivés par l'informatique et tous les domaines
						connexes. En outre, j'admire l'utilisation des nouvelles
						technologies et les met en œuvre au quotidien pour
						assurer l'optimisation de toutes les activités
						quotidiennes. Maintenant, je suis un stagiaire en
						enseignement de l'informatique au centre CRMEF à
						Marrakech.
					</p>
					<div>
						<Link
							href="/msp/lycee"
							className="inline-block px-6 py-3 mr-4 font-semibold text-white transition duration-500 ease-in-out bg-blue-500 rounded-lg lg:py-5 hover:bg-blue-600 "
						>
							Voir MSP &rarr;
						</Link>
						<Link
							href="/semestre1/plannification"
							className="inline-block px-6 py-3 font-semibold text-blue-500 transition duration-500 ease-in-out bg-transparent border border-blue-500 rounded-lg lg:py-5 hover:bg-blue-500 hover:text-white"
						>
							Modules
						</Link>
					</div>
				</div>
				<div className="relative flex justify-center md:justify-end  backdrop-blur-xl ">
					<div
						className="rounded-[4rem] h-full w-full md:h-full md:w-full absolute blur-lg -z-1 bg-gradient-to-r from-indigo-500 via-cyan-600 to-violet-200"
						style={{ filter: "blur(40px)" }}
					></div>
					<Image
						src="/photo.jpg"
						alt="Hero Image"
						className="rounded-[3rem] h-64 w-64 md:h-80 md:w-80 z-10 m-3"
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
