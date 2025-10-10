import React, { useState } from 'react';

export default function TodoApp() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [list, setList] = useState([]);

  const add = () => {
    if (!name || !price) return alert("Please fill all fields");

    const newItem = { id: Date.now(), name, price };
    setList([...list, newItem]); // Add new row
    setName('');
    setPrice('');
  };

  const remove = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Todo / Product List</h2>

      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className="border p-2 mr-2"
      />
      <input
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
        className="border p-2 mr-2"
      />
      <button
        onClick={add}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>

      <table className="mt-4 border w-full">
        <thead>
          <tr className="bg-gray-200">
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="list_data">
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={() => remove(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

       {/* ✅ JSON Output Field */}
      <div className="mt-4">
        <label className="font-semibold block mb-1">
          JSON Data (auto-updated):
        </label>
        <input
          type="text"
          value={JSON.stringify(list)}
          readOnly
          className="border p-2 w-full bg-gray-100"
        />
      </div>
    </div>

   
  );
}