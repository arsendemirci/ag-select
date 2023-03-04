module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js", ".vue", ".json", ".svg", ".png"],
        // Note: you do not need to provide aliases for same-name paths immediately under /src/
        alias: {
          components: "./src/components",
        },
      },
    ],
  ],
};
