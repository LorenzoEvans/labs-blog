---
title: 'Labs: Week 0.'
date: '2019-03-01'
tags: ['GraphQL', 'Prisma']
---

#### _Part One:_ *Individual Accomplishments.*


> ##### The majority of the work I've done this week has been on the back-end, defining the schema(s) or datamodel for the API and database, and setting up the necessary tools/logic to persist data. The hardest part is probably that, due to the nature of GraphQL and Prisma, using these tools actually requires a paradigm shift with regards to how to design API's. The process of developing, refactoring and reasoning about your is vastly different from those process when using Node, Express and SQL. GraphQL is where the API is defined, and Prisma is the layer where your API, the data models and CRUD operations are exposed to your database, sometimes referred to as a Data Access Layer.


#### Detailed Analysis:
 #### _Ticket:_ _*Connect Prisma to Backend*_.

* ##### https://trello.com/c/2r75FzB8/39-connect-prisma-to-backend

So, due to the fact that GraphQL is our "API Layer" and Prisma is our "Data Access Layer", Prisma is more in charge of executing the operations that send datum to our database to be persisted. Prisma does that via the Prisma Client and the Prisma Server,the former of which is a link between the GQL API and the latter, which then speaks directly to your database. The client also provides an out of the box set of CRUD operations out of the box, based on the shape of the types of data defined in your datamodel, inside of your GQL API. The process is rather simple, beginning with generating a yaml file containing 

* The endpoint for your server 
  * ##### Prisma will provide a endpoint for a demo server to persist data if you use the CLI tool.

* The language you would like your client to be generated in.
   * ##### This is possible because Prisma is language agnostic.

* Post-deploy options, such as prisma generate.

* Your secret, similar to the one placed in .env files. 

The next step is defining a _prisma.datamodel_ file containing your data-types that Prisma can use to evaluate calls to your GQL API into operations performed on your database. 

The third and final step is to run _prisma deploy_, and Prisma takes it from there. Technically,there's a fourth step, which is running _prisma generate_, but it's best practice to add that option to the post deploy hook in the aforementioned yaml file.


#### _Part Two:_ *Milestone Reflections.*

My major contribution to the project, with regards to the specs, was being objective about the trade-offs between using either of the stacks that we were choosing between. I spent a lot of time looking at the documentation, and even the specifications of the tools, and really tried to be honest about what I felt the benefits and drawbacks of either stack were, as opposed to saying this tool, or programming language or front end library was bad. That research lead to me being in favor of the stack we chose, because the project specifications present a site that looks much more featured than Medium, or Dev.to, or Stack Overflow, and the nature of those features were going to require us to speak to our database in un-predictable, dynamic ways. Given that, I felt like the flexibility of all layers of the stack we chose would be most beneficial in terms of both providing that functionality to users, and not being to complex or tedious to implement.