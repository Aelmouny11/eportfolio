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
    <div className="flex flex-wrap justify-evenly gap-4 py-2">
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
      <div className="group relative h-96 w-full sm:w-96 ">
        <Image src={img} fill alt={text} />
        <div className="absolute hidden h-full w-full flex-col items-center justify-center rounded-xl bg-slate-800/40 transition duration-700 group-hover:flex">
          {" "}
          <h1 className="text-4xl font-extrabold uppercase text-blue-400">
            {text}
          </h1>
          <button
            onClick={() => setOpen(true)}
            className="btn absolute bottom-2 right-2 bg-slate-300/20"
          >
            <HiOutlineArrowsExpand size={24} />
          </button>
        </div>
      </div>
    </Fragment>
  );
};
