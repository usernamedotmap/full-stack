import { graph, config } from '@grafbase/sdk'



const g = graph.Standalone()
const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  gitHub: g.url().optional,
  linkedUrl: g.url().optional,
  projects: g.relation(() => Propject).list().optional(),
})

const Propject = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  gitHubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})


export default config({
  graph: g,

  // }
})
