// Import the main function from the app.js file
import { main } from "./app.js";

// Define an immediately invoked async function expression (IIFE)
// This function is used to wrap the main code in an async context
(async () => {
  // Call the main function and wait for the result
  const result = await main();

  // Log the result to the console
  console.log(result);
})();
