import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, remainingCredit, creditHours, price, handleReset }) => {
  return (
    <div className="md:w-1/3 md:mt-16 my-4 py-2 md:ml-6 border-2 border-blue-400 rounded-md" style={{height:'420px'}}>
      <div className="space-y-2 px-4">
        {/* <h1>Bookmarks: {bookmarks.length}</h1> */}
        <div className="bg-purple-100 p-2 border-b-2 border-blue-400">
          <h2 className="text-2xl font-semibold text-gray-600">
            Remaining Credits:{" "}
            <span className="text-purple-600">{remainingCredit}h</span>
          </h2>
        </div>
        <div className="border-b-2 border-green-700">
          <h2 className="text-2xl font-semibold text-green-600">
            Course name:
          </h2>
          {bookmarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark} idx={idx} />
          ))}
        </div>
        <p className="border-b-2 border-orange-500 pb-2 text-xl font-bold text-gray-500">
          Total Credit Hours: {creditHours}h
        </p>
        <p className="border-b-2 border-gray-400 pb-2 text-xl font-bold text-gray-400">
          Total Price: ${price.toFixed(2)}
        </p>
        <div className="text-center md:pt-2 pt-1">
          <button onClick={handleReset} className="bg-red-200 px-6 py-1 rounded-md text-xl text-gray-600 font-semibold hover:bg-red-300 hover:text-red-500">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  remainingCredit: PropTypes.number,
  creditHours: PropTypes.number,
  price: PropTypes.number,
  handleReset: PropTypes.func
};

export default Bookmarks;
