import { useSelector } from "react-redux";

const MotelDetails = () => {
  const { propertyName, totalRooms } = useSelector((state) => state.motel);

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold">Motel Details</h2>
      {propertyName ? (
        <div>
          <p><strong>Property Name:</strong> {propertyName}</p>
          <p><strong>Total Rooms:</strong> {totalRooms}</p>
        </div>
      ) : (
        <p className="text-gray-500">No details added yet.</p>
      )}
    </div>
  );
};

export default MotelDetails;
