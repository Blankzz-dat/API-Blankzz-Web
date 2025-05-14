export default async function handler(req, res) {
  // Example static data for users
  const users = {
    'john_doe': { approved: false },
    'jane_smith': { approved: true }
  };

  // Convert users object into an array format
  const userList = Object.keys(users).map(username => ({
    username,
    approved: users[username].approved
  }));

  // Respond with the list of users
  res.status(200).json(userList);
}
