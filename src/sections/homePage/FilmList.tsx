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

        <section id='films' className="">
            <div className="relative h-full w-full bg-slate-950">
                <div className="container relative z-20 p-12">

                    <h3 className='text-white'>Do or do not. There is no try.</h3>
                    <p>Yoda</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                        {films.map((film: Film, index: number) => (
                            <FilmCard
                                key={film.node.title}
                                image={images[index % images.length]}
                                title={film.node.title}
                                director={film.node.director}
                            />
                        ))}
                    </div>
                </div>
                <div className="absolute z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
                </div>
            </div>


        </section>
    );
};
