import { gql } from 'apollo-server'

const typeDefs = gql`
type profile {
    id: ID!
    username: String!
    email: String!
    password: String!
}

type task {
  profile_id_seq: ID!
  name: String!
  color: String!
}

type task_time {
  profile_id_seq: ID!
  task_name: String!
  start_timestamp: String!
  end_timestamp: String!
}

type Query {
    allProfiles: [profile!]!
    allTasks: [task!]!
    allTaskTimes: [task_time!]!
  }`

export default typeDefs;