# React useEffect Infinite Loop

This repository demonstrates a common error in React applications: an infinite loop caused by misusing the `useEffect` hook's dependency array. The `bug.js` file shows the erroneous code, resulting in an infinite loop. The solution is provided in `bugSolution.js`.

## Problem
The initial code in `bug.js` attempts to increment a state variable (`count`) within the `useEffect` hook. However, the dependency array `[count]` causes the effect to run whenever `count` changes. The effect increments `count`, which triggers another render, causing another execution of the effect, and so on.

## Solution
The corrected code in `bugSolution.js` fixes the problem by removing `count` from the dependency array. The effect now only runs once after the initial render, preventing the infinite loop.  If the state needs to be updated based on external data or events, appropriate dependencies should be added to the array.