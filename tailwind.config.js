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
          100: '#DFDFDF',
          200: '#E5E5E5',
          300: '#AAAAAA',
          400: '#666666',
          500: '#333333',
        },
      },
    },
  },
};
