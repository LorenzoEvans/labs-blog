---
title: 'Labs: Week 1.'
date: '2019-03-10'
tags: ['React', 'Firebase']
---

#### _Part One:_ *Individual Accomplishments.*

This sprint was an experience that taught me both how much I've learned, and how strong my skills are, but also how much I have to learn, and what areas I'm weak in,
some of which extend beyond software into communication, conflict resolution, and explaining my own thought process. Some of the biggest difficulties were conforming to the rules of
various 3rd party services, such as Google and Github, within the confines of Firebase. Twitter, Google, and Github all return JSON user objects that are shaped differently, which meant we had to effectively search these objects and find the pieces of data we needed to feed back to Firebase, and all of them don't necessarily return the same information. Another difficulty was the immense size of Firebase functionality, as they offer services for iOS, Web, Android, Node, etc, and each of these are complex tools, and the documentation. It can become difficult at times, to keep track of where you've been, what you've looked at, what you actually need, or what you were even looking for in the first place. That being said, there's absolutely nothing like the reward of pulling off a task, and serving up a feature right in the nick of time, that you've been working on for two weeks.
Nonetheless, I signed up for access to Twitter's API as a dev, and was able to implement that 3rd party feature, along with implementing Google sign in. 


#### Detailed Analysis:
 #### _Ticket:_ _*Connect Prisma to Backend*_.

 * #### https://trello.com/c/J6kUM2HU

 So, all in all, the third party login button you see on our site, is a React component that renders a single button, which then
 calls an onSubmit listener, which is a function that contains all of the necessary firebase logic for the particular method an individual chose to sign in. That logic speaks to the third party API, which then speaks to its "database", and pulls the required information back, which is then returned to the Firestore, one of the two unique database types that Firebase provides, and is stored with a unique UID string that can be used to verify/authorize a user.

 * Something interesting I observed, was that, if a user signs in with a 3rd party service, that uses their Gmail, then tries to authenticate with Google, because their Google identifier is their Gmail, and their 3rd party identifier is the same email, their Gmail log in will actually _over-write_ the 3rd party login. This was a really, really tricky bug to catch, because it's not an error with the 3rd party login, but it expresses itself like an error in the code, but the solution was actually changing a setting in the Firebase console to allow users to sign in from various instances at the same time. 

 #### _Part Two:_ *Milestone Reflections.*

 This was definitely a week that emphasized the value of coordination, organization, and soft skills, over-all, team-work. I learned a lot about the kind of team-mate I am, the kind of team-mate I would like to be in the future, and just how secondary being a good developer can be to helping maintain an environment where everyone feels comfortable, heard, and understood. I think that was the most important take-away, with the second being that sometimes, you have to try a thing, that doesn't work, but leads you to another thing, that works a little better, that leads you to something that gets the job done. It can be frustrating to build something up, just to have to tear it down, again and again, but you get a little better at building each time, and eventually that process pays major dividends.