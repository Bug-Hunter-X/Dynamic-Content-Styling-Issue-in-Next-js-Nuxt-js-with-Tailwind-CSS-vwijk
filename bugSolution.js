The solution involves using the `@apply` directive within your dynamic components to apply styles.  Here's an example showing how to resolve the bug using the `@apply` directive in the Next.js/Nuxt.js component:
```javascript
// bugSolution.js
function MyComponent({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="@apply bg-gray-100 p-4 rounded-lg shadow-md">
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default MyComponent;
```
Alternatively, you could dynamically assign classes based on your data. 
```javascript
// bugSolution.js
function MyComponent({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className={`bg-gray-100 p-4 rounded-lg shadow-md ${item.isImportant ? 'bg-red-100' : ''}`}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default MyComponent;
```
This ensures that the styles are applied correctly, even to dynamically generated content.