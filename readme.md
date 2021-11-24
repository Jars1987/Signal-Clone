# Signal Clone App

Antoher clone, another blog post.

I find this readme files a good spot to document/blog my experiences while doing
these apps.

This was my first experience with React Native and Expo.

Takeaways from this clone:

1 Became more aware of the diferences across plataforms: IOS, Android and Web.

2 React Native and Expo are great tools to write code for these 3 plataforms
simultaneously

3 I am used to redux to handle all the API requests and in this case I have used
state and useEffect.

- When I attempted to use async/await to make a request to firebase and update
  the state I used closures inside useEffect
- What I learned is that in this situation the app will re-render but it will
  use the last state and not the most updated one due to state being a const. In
  summary the behaviour is due to setState being asynchronous and more
  importantly due to closure scope around immutable const value.
- So the solutions where to use mutable Ref instead of state or to add the state
  to the dependencie of useEffect (the last would give me an infinite loop of
  requests)
- I decided to use promises instead and use onSnapshot from firebase that would
  give me real time updates and triger the re render with the updated State

4 - It was fun to learn how the React Native works, the stack, the navigation
and the elements.

Let's see what the next build brings!
