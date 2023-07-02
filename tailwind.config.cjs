/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.gray,
            purple: {
                DEFAULT: '#8E7CB1',
                50: '#F1EFF5',
                100: '#E6E2EE',
                200: '#D0C9DF',
                300: '#BAAFCF',
                400: '#A496C0',
                500: '#8E7CB1',
                600: '#715B99',
                700: '#574776',
                800: '#3D3253',
                900: '#231D30',
                950: '#16121E'
            },
            pink: {
                DEFAULT: '#FA6BC6',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#FEE1F4',
                300: '#FDBAE4',
                400: '#FB92D5',
                500: '#FA6BC6',
                600: '#F835B1',
                700: '#ED089A',
                800: '#B70676',
                900: '#800453',
                950: '#650342'
            },
            yellow: {
                DEFAULT: '#FCDE5D',
                50: '#FFFFFF',
                100: '#FFFFFD',
                200: '#FEF6D5',
                300: '#FDEEAD',
                400: '#FDE685',
                500: '#FCDE5D',
                600: '#FBD326',
                700: '#E5BA04',
                800: '#AD8D03',
                900: '#766002',
                950: '#5B4A02'
            },
            lime: {
                DEFAULT: '#72F1B8',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#E1FCF0',
                300: '#BCF8DD',
                400: '#97F5CB',
                500: '#72F1B8',
                600: '#3FEC9E',
                700: '#16DD84',
                800: '#11AA65',
                900: '#0C7747',
                950: '#095D38'
            }
        },
        fontFamily: {
            'display': ['Oswald', 'sans'],
            'body': ['Fira Mono', 'monospace'],
        },
        extend: {
            animation: {
                text: 'text 10s ease infinite',
                border: 'background 5s ease infinite',
            },
            keyframes: {
                text: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '150% 150%',
                        'background-position': 'right center',
                    },
                },
                background: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '150% 150%',
                        'background-position': 'right center',
                    },
                },
            },
        },
    },
    plugins: [],
}