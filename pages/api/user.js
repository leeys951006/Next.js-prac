export default function handler(req, res) {
  const userData = {
    id: 1,
    name: 'John Doe',
    balance: 1000,
  };

  res.status(200).json(userData);
}
