const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "",
    createProxyMiddleware({
      target: "http://192.168.0.144:5005",
      changeOrigin: true,
    }),
  );
  app.use(
    "/sign-api",
    createProxyMiddleware({
      target: "http://192.168.0.144:5005",
      changeOrigin: true,
    }),
  );
};
