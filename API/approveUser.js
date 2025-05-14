export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, status } = req.body;

    // Example static data for users
    let users = {
      'john_doe': { approved: false },
      'jane_smith': { approved: true }
    };

    // Check if the user exists
    if (!users[username]) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's approval status
    users[username].approved = status;

    // Return a success message
    res.status(200).json({ message: `User ${username} has been ${status ? 'approved' : 'rejected'} successfully!` });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
