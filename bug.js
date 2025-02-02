```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: missing return statement for cleanup
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```