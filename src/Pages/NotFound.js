import React from 'react';

import images from './../assets/images';
import phrases from './../assets/donBoscoPhrases';

import { Link } from 'react-router-dom';

function NotFound() {

    const getRandomPhrase = () => {
        const random = Math.random() * (phrases.length - 1),
              phraseNumber = Math.round(random),
              phrase = phrases[ phraseNumber ];

        return phrase;
    }

    return (
        <main className="bg-blue-500 min-h-screen p-10">
            <section className="max-w-lg mx-auto">
                <h2 className="subtitle-1 text-6xl pt-0">ERROR 404</h2>

                <p className="text-center text-white text-2xl font-bold uppercase mb-10">Página no encontrada</p>
            </section>
            
            <section className="max-w-lg mx-auto text-center">
                <img src={images[1].img} title={images[1].title} alt={images[1].alt} className="w-40 mx-auto mb-8 opacity-50" />

                <blockquote cite="https://culturizando.com/grandes-frases-don-bosco/" className="text-white text-2xl font-light mb-5">
                    <i className="las la-quote-left mr-5"></i> 
                        { getRandomPhrase() }
                    <i className="las la-quote-right ml-5"></i>
                </blockquote>
                <p className="text-white text-xl text-right font-bold italic font-sans uppercase mb-8 mr-5">Don Bosco</p>

                <Link to="/login" className="bg-white text-lg font-bold rounded-full py-3 px-8 inline-block hover:bg-gray-200 focus:outline-none transform active:bg-gray-300">Regresar al inicio</Link>
            </section>
        </main>
    )
}

export default NotFound;