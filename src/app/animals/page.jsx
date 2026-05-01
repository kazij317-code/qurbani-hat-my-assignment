"use client";
import animalsData from "@/data/animals.json";
import { useState } from "react";
import AnimalCard from "@/components/AnimalCard";

export default function AnimalsPage() {
  const [animals, setAnimals] = useState(animalsData);

  const handleSort = () => {
    const sorted = [...animals].sort((a, b) => a.price - b.price);
    setAnimals(sorted);
  };

  return (
    <div className="p-6 mt-30">
      <button onClick={handleSort} className="bg-blue-500 text-white px-3 py-1 mb-4">
        Sort by Price
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}