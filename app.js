import axios from "axios";

// Define a function that fetches information about a user and their posts using the provided userId
export default async function getData(userId) {
  try {
    // Use Promise.all to make two separate HTTP GET requests and store their results in a single array
    const [user, posts] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`),
    ]);

    // Create an object with the relevant data from the user and posts requests
    const result = {
      id: user.data.id,
      name: user.data.name,
      username: user.data.username,
      email: user.data.email,
      address: user.data.address,
      phone: user.data.phone,
      website: user.data.website,
      company: user.data.company,
      posts: posts.data,
    };

    // Return the result object
    return result;
  } catch (error) {
    // Log any errors that occur during the HTTP requests
    console.error(error);
  }
}

// Call the getData function with userId 1 and log the result to the console
(async () => {
  const result = await getData(1);
  console.log(result);
})();
