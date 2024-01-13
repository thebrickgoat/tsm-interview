import React from 'react';
import Image from 'next/image';

export default function FilmCard({ image, title, director }: any) {
    return (
            <div className="shadow-2xl shadow-cyan-600/25 bg-white rounded-lg p-4 md:hover:scale-105 transition ease-in-out delay-150">
                <Image src={`/filmImages/${image}.jpg`} alt={`Title Image for ${title}`} width={300} height={200} className="mb-4 rounded-lg w-full" />
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-500">{director}</p>
            </div>
    );
};
