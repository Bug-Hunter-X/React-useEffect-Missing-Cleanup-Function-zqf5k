# React useEffect Missing Cleanup Function
This repository demonstrates a common bug in React applications: forgetting to include a cleanup function in the useEffect hook.  This can lead to memory leaks and unexpected behavior.

## The Bug
The `bug.js` file contains a component that uses `useEffect` to update a counter every second.  However, it's missing the return function that's necessary to clear the interval when the component unmounts.  This means that the interval continues to run even after the component is no longer visible, consuming resources.

## The Solution
The `bugSolution.js` file shows the corrected version with the cleanup function added. The return statement of useEffect clears the interval using `clearInterval` preventing memory leaks.