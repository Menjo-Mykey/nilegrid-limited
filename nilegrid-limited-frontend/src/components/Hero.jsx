// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    // Fetch data from Strapi CMS
    axios
      .get("http://localhost:1337/api/hero") // Replace with  Strapi endpoint
      .then((response) => {
        setHeroData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching hero data:", error);
      });
  }, []);

  return (
    <section className="bg-blue-600 text-white py-12">
      {heroData ? (
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold">{heroData.attributes.title}</h2>
          <p className="mt-4 text-lg">{heroData.attributes.description}</p>
          <button className="mt-8 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
            Learn More
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Hero;
