import React, { useState, useEffect } from 'react';
import { getProjects } from '../api'; // Make sure api.js is at ../src/api.js

export default function OurProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data);
      } catch (err) {
        setError('Failed to load projects.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <div className="text-center p-10">Loading projects...</div>;
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <section className="bg-gray-100 py-20 font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Projects</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image}
                alt={project.name} 
                className="w-full h-56 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <button className="font-semibold text-orange-500 hover:text-orange-600 transition duration-300">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}