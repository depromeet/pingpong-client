/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // heading
        h1: ['2.4rem', { fontWeight: '700', letterSpacing: '-0.4px', lineHeight: '140%' }],
        h2: ['2.0rem', { fontWeight: '700', letterSpacing: '-0.3px', lineHeight: '140%' }],
        h3: ['1.8rem', { fontWeight: '700', letterSpacing: '-0.3px', lineHeight: '140%' }],
        // title
        t1: ['1.8rem', { fontWeight: '600', letterSpacing: '-0.3px', lineHeight: '140%' }],
        t2: ['1.6rem', { fontWeight: '600', letterSpacing: '-0.3px', lineHeight: '140%' }],
        t3: ['1.5rem', { fontWeight: '600', letterSpacing: '-0.3px', lineHeight: '140%' }],
        t4: ['1.4rem', { fontWeight: '600', letterSpacing: '-0.3px', lineHeight: '140%' }],
        // body
        b1: ['1.6rem', { fontWeight: '500', letterSpacing: '-0.4px', lineHeight: '150%' }],
        b2: ['1.5rem', { fontWeight: '500', letterSpacing: '-0.4px', lineHeight: '150%' }],
        b3: ['1.4rem', { fontWeight: '500', letterSpacing: '-0.3px', lineHeight: '150%' }],
        b4: ['1.3rem', { fontWeight: '500', letterSpacing: '-0.3px', lineHeight: '150%' }],
        b5: ['1.2rem', { fontWeight: '500', letterSpacing: '-0.3px', lineHeight: '150%' }],
        // etc
        button: ['1.5rem', { fontWeight: '500', letterSpacing: '-0.3px', lineHeight: '100%' }],
        overline: ['1.1rem', { fontWeight: '500', letterSpacing: '-0.1px', lineHeight: '100%' }],
      },
      colors: {
        gray: {
          100: '#F8F8F8',
          200: '#DFDFDF',
          300: '#E5E5E5',
          400: '#CBCBCB',
          500: '#AAAAAA',
          600: '#999999',
          700: '#666666',
          800: '#333333',
        },
        red: {
          300: '#F35151',
        },
        primary: '#222222', //FIXME: change to primary color
      },
      spacing: {
        1: '0.1rem',
        2: '0.2rem',
        4: '0.4rem',
        6: '0.6rem',
        8: '0.8rem',
        10: '1rem',
        12: '1.2rem',
        16: '1.6rem',
        20: '2rem',
        24: '2.4rem',
        32: '3.2rem',
      },
      keyframes: {
        slideup: {
          '0%': { transform: 'translateY(100px)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeout: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        slideup: 'slideup 1s',
        fadeout: 'fadeout 1s forwards',
      },
    },
  },
};
