module.exports = {
    purge: [
        './src/Components/*.js',
        './src/Pages/*.js'
    ],

    darkMode: false, // or 'media' or 'class'

    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            // serif: ['Merriweather', 'serif'],
            // serif: ['Montserrat', 'serif'],
            // serif: ['Oswald', 'serif'],
            serif: ['Crimson Text', 'serif'],
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active']
        }
    },
    plugins: [
        require('@tailwindcss/forms')
    ]
}
