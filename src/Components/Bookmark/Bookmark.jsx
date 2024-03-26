import PropTypes from 'prop-types';

const Bookmark = ({bookmark, idx}) => {

  const {title} = bookmark;

  return (
    <div>
      <div className='text-sm font-semibold text-gray-500 p-0.5'>
        <p>{idx + 1}. {title}</p>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
  idx: PropTypes.number
}

export default Bookmark;