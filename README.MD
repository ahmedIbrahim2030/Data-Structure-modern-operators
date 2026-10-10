# Data Structures, Modern Operators, and Strings

This project focuses on modern JavaScript techniques for working with data structures and strings in a clean and efficient way.

## Overview

The lessons in this folder cover essential ES6+ features used in real-world JavaScript development, including:

- Object and array destructuring
- Spread and rest operators
- Short-circuit evaluation and logical operators
- Optional chaining and nullish coalescing
- Working with arrays, objects, sets, and maps
- String manipulation and template literals
- Practical data processing patterns

## Learning Goals

By the end of this project, I able to:

- Read and write cleaner JavaScript code
- Extract values from complex data structures easily
- Work with collections more effectively
- Use modern operators to reduce repetitive logic
- Manipulate and format strings efficiently

## Example Concepts Covered

```js
const restaurant = {
  name: "Pizza Place",
  openingHours: {
    thu: { open: 12, close: 22 },
  },
};

const { name, openingHours } = restaurant;
const values = [...[1, 2, 3], 4, 5];
const message = `Welcome to ${name}!`;
```

## Getting Started

1. Open the project folder in your editor.
2. Review the JavaScript files in this lesson.
3. Run each script with Node.js or in the browser console:
