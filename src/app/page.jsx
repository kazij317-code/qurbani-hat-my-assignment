import Hero from "@/components/Hero";
import ExtraSection from "@/components/Hero";
import animals from "@/data/animals.json";
import AnimalCard from "@/components/AnimalCard";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <div className="px-10 grid md:grid-cols-4 gap-10">
        {animals.slice(0, 4).map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
      <Banner/>
    </div>
  );
}