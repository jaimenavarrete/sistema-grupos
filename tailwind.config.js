module.exports = {
    purge: [
        './src/Components/*.js',
        './src/Pages/*.js'
    ],

    darkMode: false, // or 'media' or 'class'

    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ]
}
