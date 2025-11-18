import React, { useState, useEffect } from 'react';
import { getClients } from '../api'; // Make sure api.js is at ../src/api.js

export default function HappyClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await getClients();
        setClients(response.data);
      } catch (err) {
        setError('Failed to load clients.');
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  if (loading) return <div className="text-center p-10">Loading clients...</div>;
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <section className="bg-white py-20 font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Happy Clients</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client) => (
            <div key={client._id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src={client.image}
                alt={client.name} 
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4 border-4 border-gray-100" 
              />
              <p className="text-gray-500 text-sm italic mb-4">
                "{client.description}"
              </p>
              <h3 className="text-lg font-bold text-blue-600">
                {client.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {client.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}