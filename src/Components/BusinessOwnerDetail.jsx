import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMotelDetails } from "../features/motelSlice";
import { useNavigate } from "react-router-dom";
import Image from "../assets/Images/image1.jpg"; 

const BussinessOwnerForm = () => {
  const [propertyName, setPropertyName] = useState("");
  const [totalRooms, setTotalRooms] = useState(0);
  const [logo, setLogo] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!propertyName || !totalRooms) {
      alert("Please fill in all fields.");
      return;
    }
    dispatch(addMotelDetails({ propertyName, totalRooms, logo }));
    navigate("/add-rooms");
  };

  // Handle logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result); // Store the image as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left Side: Full-Screen Image */}
      <div className="w-1/2 h-full">
        <img src={Image} alt="Motel" className="w-full h-full object-cover" />
      </div>

      {/* Right Side: Full-Screen Form */}
      <div className="w-1/2 h-full flex justify-center items-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-10 w-3/4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Add Motel Details
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Property Name"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              className="w-full p-3 border rounded mb-4 text-lg"
            />
            <input
              type="text"
              placeholder="Total Rooms"
              value={totalRooms}
              onChange={(e) => setTotalRooms(e.target.value)}
              className="w-full p-3 border rounded mb-4 text-lg"
            />

            {/* Upload Logo Field */}
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2">
                Upload Motel Logo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Preview Logo (If Selected) */}
            {logo && (
              <div className="mb-4">
                <p className="text-gray-600 mb-2">Logo Preview:</p>
                <img
                  src={logo}
                  alt="Motel Logo"
                  className="w-32 h-32 object-cover border rounded-lg shadow-md"
                />
              </div>
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full text-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BussinessOwnerForm;
