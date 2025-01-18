```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here:  This will cause an infinite loop
    setCount(count + 1);
  }, [count]); // This dependency array is the cause

  return <div>Count: {count}</div>;
}
```