import axios from "axios";

export default async function getData(userId) {
  try {
    const [user, posts] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`),
    ]);

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

    return result;
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  const result = await getData(1);
  console.log(result);
})();
