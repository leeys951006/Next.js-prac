import React from 'react';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/user');
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name}</p>
      <p>Your current balance is: ${user.balance}</p>
    </div>
  );
};

export default Dashboard;
