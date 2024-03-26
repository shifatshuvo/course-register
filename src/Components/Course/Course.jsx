import PropTypes from 'prop-types';
import { IoBookSharp } from "react-icons/io5";

const Course = ({course, handleSelect}) => {

  const { id, cover, title, description, price, credit_hour } = course;

  return (
    <div className="p-3">
      <div className="md:w-full p-2 border border-blue-400 rounded-md md:space-y-3">
        <img className="w-full h-56" src={cover} alt={`cover image of ${title, id}`} />
        <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
        <p className="break-words w-64 lineBreak text-sm text-gray-600">{description}</p>
        <div className="flex justify-between">
          <p className='text-gray-500 font-bold'>Price: ${price}</p>
          <div className='font-bold text-gray-500 flex items-center space-x-1'>
            <IoBookSharp />
            <p>Credit: {credit_hour}h</p>
          </div>
        </div>
        <div className='text-center py-2'>
          <button onClick={() => handleSelect(course)} className='bg-gray-300 py-1 px-6 text-xl font-semibold rounded-md text-purple-500 hover:bg-gray-200 hover:text-blue-500'>Select</button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleSelect: PropTypes.func
}

export default Course;