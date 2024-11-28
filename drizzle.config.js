/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:FKPJhRgN3eY6@ep-fragrant-wind-a5se5xoi.us-east-2.aws.neon.tech/AI-Content-Genrator?sslmode=require'
    }
  };