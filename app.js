// Import the axios library for making HTTP requests
import axios from "axios";

// Define an async function that retrieves a user's data
async function getData(userId) {
  try {
    // Use axios to make an HTTP GET request to the JSONPlaceholder API for the user data
    const { data: user } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    // Use axios to make an HTTP GET request to the JSONPlaceholder API for the user's posts
    const { data: posts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );

    // Return an object that includes the user data and posts
    return { ...user, posts };
  } catch (error) {
    // If an error occurs during the requests, log the error to the console and return null
    console.error(error);
    return null;
  }
}

// Define an async function that calls the getData function and returns the result
export async function main() {
  const result = await getData(1);
  return result;
}
