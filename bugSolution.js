```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This effect now only runs once after mount
    // Further updates to count would need different handling
    console.log('Mounted');
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```