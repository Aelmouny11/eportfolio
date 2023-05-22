import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	return (
    <div className="mx-auto grid min-h-screen  max-w-7xl px-1 py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="mb-6 text-3xl font-bold uppercase md:text-5xl lg:text-7xl">
            <span className="text-blue-500">Elmoumny</span>{" "}
            <span className="">Azddine</span>
          </h1>
          <p className="text-lg  md:text-2xl md:leading-normal">
            <em>
              Motivés par l'informatique et tous les domaines connexes. En
              outre, j'admire l'utilisation des nouvelles technologies et les
              met en œuvre au quotidien pour assurer l'optimisation de toutes
              les activités quotidiennes. Maintenant, je suis un enseignant
              stagiaire en enseignement de l'informatique au centre CRMEF à
              Marrakech.
            </em>
          </p>
          <div>
            <Link
              href="/msp/lycee"
              className="mr-4 inline-block rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition duration-500 ease-in-out hover:bg-blue-600 lg:py-5 "
            >
              Voir MSP &rarr;
            </Link>
            <Link
              href="/semestre1/plannification"
              className="inline-block rounded-lg border border-blue-500 bg-transparent px-6 py-3 font-semibold text-blue-500 transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white lg:py-5"
            >
              Modules
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center backdrop-blur-xl  md:justify-end ">
          <div
            className="-z-1 absolute h-full w-full rounded-[4rem] bg-gradient-to-r from-indigo-500 via-cyan-600 to-violet-200 blur-lg md:h-full md:w-full"
            style={{ filter: "blur(40px)" }}
          ></div>
          <Image
            src="/photo.jpg"
            alt="Hero Image"
            className="z-10 m-3 h-64 w-64 rounded-[3rem] md:h-80 md:w-80"
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
