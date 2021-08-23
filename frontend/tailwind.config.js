const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{ts,tsx,mdx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        colors,
        extend: {
            colors: {
                primary: colors.rose,
                'text-primary': colors.gray["800"],
                'text-primary-dark': colors.gray["50"],
            },
            fontFamily: {
                sans: [
                    '游ゴシック体',
                    'YuGothic',
                    '游ゴシック',
                    'Yu Gothic',
                    'sans-serif',
                ],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
