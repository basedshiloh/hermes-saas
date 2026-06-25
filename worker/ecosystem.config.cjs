module.exports = {
  apps: [
    {
      name: "hermes-worker",
      script: "dist/server.js",
      cwd: "/home/hermes/worker",
      env: {
        NODE_ENV: "production",
        PORT: "4000",
        REDIS_URL: "redis://127.0.0.1:6379",
        INTERNAL_TOKEN: "",
      },
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      watch: false,
    },
  ],
};
