module.exports = {
  plugins: {
    "@tailwindcss/nesting": "postcss-nested",
    "@tailwindcss/postcss": {
      config: "./tailwind.config.cjs"
    },
    "autoprefixer": {}
  }
}