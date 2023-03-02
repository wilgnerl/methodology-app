import { createClient } from 'next-sanity'

export const cms = createClient({
  projectId: 'e4t4hb0q',
  dataset: 'content',
  apiVersion: '2022-03-25',
  useCdn: true,
  token: process.env.TOKEN_SANITY as string,
})
