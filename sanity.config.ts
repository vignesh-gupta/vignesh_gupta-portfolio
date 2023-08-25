import { deskTool } from 'sanity/desk';
import { defineConfig } from 'sanity'
import schemas from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = "2023-05-03"

const client = defineConfig({
  projectId,
  dataset,
  apiVersion, 
  title: "Dev Portfolio",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})
 
export default client