---
title: 'Labs: Week 0.'
date: '2019-03-01'
tags: ['GraphQL', 'Prisma']
---

The majority of the work I've done this week has been on the back-end, defining the schema(s) or datamodel for the API and database, and setting up the necessary tools/logic to persist data. The hardest part is probably that, due to the nature of GraphQL and Prisma, using these tools actually requires a paradigm shift with regards to how to design API's. The process of developing, refactoring and reasoning about your is vastly different from those process when using Node, Express and SQL. GraphQL is where the API is defined, and Prisma is the layer where your API, the data models and CRUD operations are exposed to your database, sometimes referred to as a Data Access Layer.


### Ticket: _*Connect Backend to Prisma*_.