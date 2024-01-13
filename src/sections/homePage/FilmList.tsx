import React from 'react';
import FilmCard from '@/components/filmList/FilmCard';

type Film = {
    node: {
        title: string;
        director: string;
    };
};

export default function FilmList({ films }: any) {
    const images = [
        'film1',
        'film2',
        'film3',
        'film4',
        'film5',
        'film6',
        'film7',
        'film8'
    ];

    return (
        <section id='films' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {films.map((film: Film, index: number) => (
                <FilmCard
                    key={film.node.title}
                    image={images[index % images.length]}
                    title={film.node.title}
                    director={film.node.director}
                />
            ))}
        </section>
    );
};
