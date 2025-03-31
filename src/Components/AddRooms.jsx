import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const AddRooms = () => {
  const totalRooms = useSelector((state) => state.motel.totalRooms); // Get totalRooms from Redux store

  const [rooms, setRooms] = useState([]);

  // When totalRooms changes, update the state with new empty rooms
  useEffect(() => {
    setRooms(Array.from({ length: totalRooms }, (_, index) => ({
      id: index + 1,
      roomNumber: "",
      roomType: "",
    })));
  }, [totalRooms]);

  const handleInputChange = (index, field, value) => {
    setRooms((prevRooms) =>
      prevRooms.map((room, i) =>
        i === index ? { ...room, [field]: value } : room
      )
    );
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Room Details</h2>
      <form>
        {rooms.map((room, index) => (
          <div key={room.id} className="flex gap-4 mb-2">
            {/* Room Number Input */}
            <input
              type="text"
              placeholder={`Room ${index + 1} Number`}
              value={room.roomNumber}
              onChange={(e) => handleInputChange(index, "roomNumber", e.target.value)}
              className="w-1/2 p-2 border rounded"
            />
            {/* Room Type Dropdown */}
            <select
              value={room.roomType}
              onChange={(e) => handleInputChange(index, "roomType", e.target.value)}
              className="w-1/2 p-2 border rounded"
            >
              <option value="">Select Room Type</option>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        ))}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
          Save Rooms
        </button>
      </form>
    </div>
  );
};

export default AddRooms;
