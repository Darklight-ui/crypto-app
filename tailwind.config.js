/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor:{
      primary: '#6900ff',
      offWhite: '#f4f4f4',
    },
    backgroundColor: {
      bgColor: '#26272b',
      bgPurple: '#6900ff'
    },
    extend: {
      fontFamily: {
        "fira-sans": '"Fira Sans", sans-serif',
        "cantarell": '"Cantarell", sans-serif',
        "Ubuntu": '"Ubuntu", sans-serif',
        "Oxygen": '"Oxygen", sans-serif',
        "Roboto": '"Roboto", sans-serif',
        "Rubik": '"Rubik", sans-serif'
      }
    },
  },
  plugins: [],
}