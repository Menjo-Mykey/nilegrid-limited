const { default: postcss } = import("postcss");

export default {
    plugins: {
      "@tailwindcss/postcss": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  };

