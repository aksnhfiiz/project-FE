import React, { useEffect, useState } from 'react';

const Account: React.FC = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editAccount, setEditAccount] = useState<any>(null);
  const [formData, setFormData] = useState({ username: '', name: '', email: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = () => {
    setLoading(true);
    fetch('http://localhost:3000/get-account')
      .then(response => response.json())
      .then(data => {
        setAccounts(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddAccount = () => {
    fetch('http://localhost:3000/store-account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(() => {
        fetchAccounts(); 
        setFormData({ username: '', name: '', email: '' });
        setMessage('Account added successfully!');
      })
      .catch(error => {
        console.error('Error adding account:', error);
        setMessage('Error adding account.');
      });
  };

  const handleUpdateAccount = () => {
    if (!editAccount) return; 
    fetch('http://localhost:3000/update-account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: editAccount.id, ...formData })
    })
      .then(response => response.json())
      .then(() => {
        fetchAccounts(); 
        setEditMode(false);
        setEditAccount(null);
        setFormData({ username: '', name: '', email: '' });
        setMessage('Account updated successfully!');
      })
      .catch(error => {
        console.error('Error updating account:', error);
        setMessage('Error updating account.');
      });
  };

  const handleDeleteAccount = (id: number) => {
    fetch('http://localhost:3000/delete-account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
      .then(() => {
        fetchAccounts();
        setMessage('Account deleted successfully!');
      })
      .catch(error => {
        console.error('Error deleting account:', error);
        setMessage('Error deleting account.');
      });
  };

  const handleEditAccount = (account: any) => {
    setEditMode(true);
    setEditAccount(account);
    setFormData({ username: account.username, name: account.name, email: account.email });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen p-5">
      <div className="container mx-auto p-4 text-white">
        
       
        {message && (
          <div className="mb-4 p-2 bg-green-200 text-green-800 border border-green-300 rounded">
            {message}
          </div>
        )}
        

        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-5">{editMode ? 'Edit Account' : 'Add Premium Account'}</h2>
          <div className="mb-2">
            <label className="block text-sm mb-1">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="border px-2 py-1 w-full bg-gray-400 text-black rounded-xl"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border px-2 py-1 w-full bg-gray-400 text-black rounded-xl"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border px-2 py-1 w-full bg-gray-400 text-black rounded-xl"
            />
          </div>
          <button
            onClick={editMode ? handleUpdateAccount : handleAddAccount}
            className="bg-blue-800 text-white px-4 py-2 rounded-xl mt-4 hover-zoom"
          >
            {editMode ? 'Update Account' : 'Sign in'}
          </button>
        </div>
        

        <h1 className="text-2xl font-bold mb-7 mt-20">Premium Account List</h1>
        <table className="table-auto w-full">
          <thead className="bg-orange-500">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account: any) => (
              <tr key={account.id} className="bg-gray-400 text-black text-center font-medium">
                <td className="border px-4 py-2">{account.id}</td>
                <td className="border px-4 py-2">{account.username}</td>
                <td className="border px-4 py-2">{account.name}</td>
                <td className="border px-4 py-2">{account.email}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditAccount(account)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-xl hover-zoom mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteAccount(account.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-xl hover-zoom"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Account;
