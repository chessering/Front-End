module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      spacing: {
        'custom-width': '328px',
        'custom-height': '240px',
        'custom-top': '443px', // 이 값은 translate를 통해 적용할 수 있습니다.
        'custom-left': '8px',  // 이 값은 translate를 통해 적용할 수 있습니다.
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
};