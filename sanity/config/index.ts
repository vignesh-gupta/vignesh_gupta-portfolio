const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2023-05-03";

const config = {
  projectId,
  dataset,
  apiVersion,
  useCDN: true,
};

export default config;
