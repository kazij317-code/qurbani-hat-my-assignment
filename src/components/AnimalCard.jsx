import Image from "next/image";
import Link from "next/link";

export default function AnimalCard({ animal }) {
  return (
    // <div className="card bg-base-100 shadow-xl hover:scale-105 transition duration-300">
    //   <figure>
    //     <Image
    //       alt={animal.type}
    //       src={animal.image}
    //       width={100}
    //       height={100}
    //       className="w-full object-cover" />
    //   </figure>

    //   <div className="card-body">
    //     <h2 className="card-title">{animal.name}</h2>
    //     <p className="text-green-600 font-bold">{animal.price} BDT</p>

    //     <Link href={`/animals/${animal.id}`}>
    //       <button className="btn btn-success w-full">View Details</button>
    //     </Link>
    //   </div>
    // </div>
    // -----------------------
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          alt={animal.type}
          src={animal.image}
          width={100}
          height={100}
          className="w-full object-cover p-5 rounded-t-4xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-between">

          {/* <div className="badge badge-secondary">Available</div> */}
          {/* ------------------ */}
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Available
          </div>
          {/* ------------------ */}

          <div className="badge rounded-full bg-red-200">{animal.category}</div>
        </h2>
        <h2 className="card-title">{animal.name}</h2>
        <p className="text-green-600 font-bold">{animal.price} BDT</p>
        <div className="card-actions justify-end">
          <Link href={`/animals/${animal.id}`}>
            <button className="btn btn-success w-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
    // -----------------------


  );
}
// ----------------

// ----------------