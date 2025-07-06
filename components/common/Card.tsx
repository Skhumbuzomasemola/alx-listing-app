import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="border rounded-lg shadow p-4">
    {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />}
    <h2 className="mt-2 font-semibold">{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;
