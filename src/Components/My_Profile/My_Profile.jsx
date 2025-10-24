import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { onAuthStateChanged, updateProfile } from "firebase/auth";

const My_Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName || "");
        setPhoto(currentUser.photoURL || "");
      } else {
        setUser(null);
        setName("");
        setPhoto("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!user) return;

    updateProfile(user, { displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        setMessage("Profile updated successfully!");
      })
      .catch((err) => setMessage(err.message));
  };

  if (!user) 
    return 
  <p className="text-center mt-10">Loading user...</p>;

  return (
    <div className="text-center mt-10 max-w-md mx-auto border p-10 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-3">My Profile</h2>

      <img
        src={photo}
        className="w-28 h-28 rounded-full mx-auto border border-gray-300 object-cover mb-4"
        onError={(e) => (e.target.src = "/default-avatar.png")}
      />

      <p className="mb-2">
        <strong>Name:</strong> {user.displayName || name || "No name set"}
      </p>
      <p className="mb-4">
        <strong>Email:</strong> {user.email}
      </p>

      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Update Name"
          className="border p-2 w-full rounded-md"
          required
        />

        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Update Photo URL"
          className="border p-2 w-full rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition cursor-pointer"
        >
          Update Profile
        </button>
      </form>

      {message && <p className="mt-3 text-green-500">{message}</p>}
    </div>
  );
};

export default My_Profile;
