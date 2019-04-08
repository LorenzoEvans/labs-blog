---
title: 'Labs: Week 2.'
date: '2019-03-01'
tags: ['Firebase', 'Prisma',]
---

#### _Part One:_ *Individual Accomplishments.*

Honestly, I'm not sure I have an individual accomplishment this week. A lot of my work was collaborative, in that, I started some things, helped debug, and research,
but a lot of those things ended up being passed on to other team members, who then finished, or carried out, or executed upon that. Due to the nature of some of the challenges,
and the variations between each team mates understanding of certain tools, or concepts that needed to be made use of, and the size of some of the features, there was just, for me,
never a particularly good time to go off and work on something by myself, that I could turn around and say I did this, and be referring to a whole feature.
I know that on a team of developers, value doesn't just get added by adding code, or features, but it's very hard to not judge myself as a developer based on that metric. I guess, at the end of the day, I would hope that, if asked, my team-mates would feel different about the level or quality of my contributions this week, than I do. If anything, I suppose an individual accomplishment would be my ability to step back and look at myself honestly and say, I don't think I met my standards, and begin to ask myself what lead to that, and what I can change so that I don't feel this way next time around.

#### Detailed Analysis:
 #### _Commit:_ _*Tweaking A Promise Chain_.

* ##### https://github.com/Lambda-School-Labs/labspt2-rate-my-diy/blob/master/client/src/components/SignIn/ThirdPartyApi/Twitter.js 

```JS
    this.props.firebase
      .doSignInWithTwitter()
      .then(socialAuthUser => {
        var userBooleanValue = JSON.parse(
          socialAuthUser.additionalUserInfo.isNewUser
        );
        if (userBooleanValue) {
          const email = socialAuthUser.user.providerData["0"].email;
          const uid = socialAuthUser.user.providerData["0"].uid;
          this.setState({
            isNewUser: true,
            isOpen: true,
            email: email,
            uid: uid
          });
        } else {
          this.props.history.push(ROUTES.HOME);
        }
        return this.props.firebase
          .user(socialAuthUser.user.providerData["0"].uid)
          .set({
            email: socialAuthUser.user.email
          });
      })
```
This was a nifty trick I thought of, that altered the promise chain we were using to send an authenticated user object back to the firestore in firebase.
The issue at hand was that, we could store the object, but before we stored it, we needed to use it to check the boolean value of the isNewUser property contained in the object, and then route our users to a different page to complete the 3rd party sign up, so that we had a unique identifier to relate authenticated users to. What I did was locate that key in the JSON object, parsed it, and bound it to a variable, and used it in the conditional section of an if statement.
If the key is true, the email and uid string get stored in their own variables, and then passed back into state, and then forwarded to the input fields on the more info page we route users to if they are new. Otherwise, return them to the home page and let them do as they please. 
The real tricky part was refactoring the promise chain to do this, and then also continue sending the information to firebase, so that we had the user object stored for later access.
Another thing that it took me a while to figure out, was that, despite the fact that Github returns a JSON object, some of the properties inside of it were arrays, specifically *_providerData_*, which meant, instead of using dot notation all of the way, I would have to use bracket notation, and pass it the necessary key as a string, in order to access the desired property value. 



 #### _Part Two:_ *Milestone Reflections.*

 All in all, this particular sprint was a learning experience about myself, how I percieve my contributions, value, and just how important and critical team dynamic is to developing a high quality software product in a timely manner. While I'm not quite satisified with my performance, I have extreme appreciation for the work my team has done this sprint, and am trying my best to analyze myself and course correct, so that in two weeks, I am entirely confident that I carried my weight.