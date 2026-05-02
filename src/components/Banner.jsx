import Image from 'next/image';

import Marquee from "react-fast-marquee";


const news = [
  {
    _id: "1",
    title: "(1) Friesian Premium Bull",
  },
  {
    _id: "2",
    title: "(2) Black Bengal Goat",
  },
  {
    _id: "3",
    title: "(3) Holstein Friesian Cow",
  },
];

const Banner = () => {
  return (
    // <div className="max-w-7xl mx-auto p-6 mt-10">
    //   <div className="text-center">


    //     <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
    //       Qurbani Tips
    //     </h1>

    //     <div className="text-2xl">
    //       Make sincere intention for qurbani.
    //       Choose a healthy, eligible animal.
    //       Ensure proper age and condition.
    //       Treat the animal with kindness.
    //       Use a sharp knife for quick slaughter.
    //       Recite Bismillah, Allahu Akbar.
    //       Maintain cleanliness and hygiene.
    //       Distribute meat among needy people.
    //       Perform after Eid prayer time.
    //       Avoid waste and show gratitude.
    //     </div>




    //   </div>
    //   <div className="mt-10 flex justify-between gap-4 items-center bg-gray-200 py-4 px-2">

    //     <button className="btn bg-green-700 text-3xl">Top Breeds:</button>

    //     <Marquee pauseOnHover={true} speed={50}>

    //       {news.map(n => <span className="text-2xl mx-2 text-red-600" key={n._id}>{n.title}</span>)}

    //     </Marquee>
    //   </div>

    //   <div className="mt-5 grid md:grid-cols-3 gap-5 mx-auto">
    //     <Image
    //       src="/images/cow.jpg"
    //       width={400}
    //       height={400}
    //       alt="cow"
    //       className="rounded-lg"
    //     />
    //     <Image
    //       src="/images/goat.jpg"
    //       width={400}
    //       height={400}
    //       alt="goat"
    //       className="rounded-lg"
    //     />
    //     <Image
    //       src="/images/cow2.jpg"
    //       width={400}
    //       height={400}
    //       alt="cow"
    //       className="rounded-lg"
    //     />
    //   </div>

    // </div>

    // -------------------------
    <div className="max-w-7xl mx-auto px-4 sm:px-6 p-6 mt-10">
      <div className="text-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Qurbani Tips
        </h1>

        <div className="text-base sm:text-lg md:text-2xl space-y-2">
          Make sincere intention for qurbani.
          Choose a healthy, eligible animal.
          Ensure proper age and condition.
          Treat the animal with kindness.
          Use a sharp knife for quick slaughter.
          Recite Bismillah, Allahu Akbar.
          Maintain cleanliness and hygiene.
          Distribute meat among needy people.
          Perform after Eid prayer time.
          Avoid waste and show gratitude.
        </div>

      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between gap-4 items-center bg-gray-200 py-4 px-3 sm:px-4">

        <button className="btn bg-green-700 text-lg sm:text-2xl md:text-3xl w-full md:w-auto">
          Top Breeds:
        </button>

        <div className="w-full">
          <Marquee pauseOnHover={true} speed={50}>
            {news.map(n => (
              <span
                className="text-sm sm:text-lg md:text-2xl mx-2 text-red-600"
                key={n._id}
              >
                {n.title}
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto">
        <Image
          src="/images/cow.jpg"
          width={400}
          height={400}
          alt="cow"
          className="rounded-lg w-full h-auto"
        />
        <Image
          src="/images/goat.jpg"
          width={400}
          height={400}
          alt="goat"
          className="rounded-lg w-full h-auto"
        />
        <Image
          src="/images/cow2.jpg"
          width={400}
          height={400}
          alt="cow"
          className="rounded-lg w-full h-auto"
        />
      </div>

      {/* <AnimalCard /> */}
    </div>
    // ----------------------

  );
};

export default Banner;