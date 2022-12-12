## Problem
In the javascript file, write a program to perform a GET request on the route:
```js
https://coderbyte.com/api/challenges/json/json-cleaning
```
The clean the object according to the following rules:
- Remove all keys that have values of `N/A`, `-` or empty strings.
- If one of these values appear in an array, remove the single item from the array.
- Then console log the modified object as a string.

### Example Input
```json
{
  "name": 
    {
      "first":"Daniel",
      "middle":"N/A",
      "last":"Smith"
    },
  "age":"45"
}
```

### Example Output
```json
{
  "name": 
    {
      "first":"Daniel",
      "last":"Smith"
    },
  "age":"45"
}
```