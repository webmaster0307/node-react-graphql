const { buildSchema } = require('graphql');

module.exports = buildSchema(`
            type Event {
                _id: ID!
                title: String!
                description: String!
                price: Float!
                date: String!
                creator: User!
            }

            type User {
              _id: ID!
              email: String!
              password: String!
              createdEvents: [Event!]
            }

            input EventInput {
                title: String!
                description: String!
                price: Float!
                date: String!
            }

            input UserInput {
              password: String!
              email: String!
            }

            type rootQuery {
                events: [Event!]!
            }

            type rootMutation {
                createEvent(eventInput: EventInput): Event 
                createUser(userInput: UserInput): User
            }
        
            schema {
                query: rootQuery,
                mutation: rootMutation
            }
        `);
