---
title: 'Labs: Week 3.'
date: '2019-03-10'
tags: ['GraphQL', 'Testing']
---

#### _Part One:_ *Individual Accomplishments.*

I'm rather proud of the work I did during this sprint, because not only was I in the process of learning GraphQL, I was learning how to test, and how to test GraphQL models, and resolvers. My process was fast paced, and iterative, in that I would learn about a small bit of testing, such as what a mock, or an assertion is, and then look at how to implement that within the context of GQL and the tools provided by it's ecosystem, write the code, test that the test worked (which is where things got rather meta), and repeat.
Given that the majority of user interaction with our application would be one of the CRUD operations, and that the nature of those operations were largely linked to the data model underlying the application, I decided that the most comprehensive test suite I needed to develop in the time available, would test that all _basic_ CRUD operations on all of the types defined in our datamodel. I set out to do so, and was able to confirm roughly 27 of the 29 tested operations,with regard to their respective types, could be guaranteed to run correctly.

#### Detailed Analysis:
 #### _Commit:_ _*Writing a test suite_.

  #### _Part Two:_ *Milestone Reflections.*