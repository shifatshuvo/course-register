import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import { useState } from 'react'
import './App.css'

function App() {


  const [bookmarks, setBookmarks] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [creditHours, setCreditHours] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelect = (course) => {

    
    // remaining credit hours
    // if (creditHours >= 20) {
    //   alert("Credit limit over!!");
    //   return;
    // }
    
    
    // credit_hour
    const newCreditHours = (creditHours + course.credit_hour);
    // reduce credit h
    const newRemainingCH = (remainingCredit - course.credit_hour);

    if (newCreditHours <= 20 && newRemainingCH <= 20) {
      // bookmarks
      const newBookmarks = [...bookmarks, course];
      setBookmarks(newBookmarks);

      // c hours
      setCreditHours(newCreditHours);
      setRemainingCredit(newRemainingCH);

      // total price
      const newPrice = (price + parseFloat(course.price));
      setPrice(newPrice);
      return;
    }
    alert("Can't take over 20 ch or Limit over!!");

  }

  return (
    <div className='bg-gray-100 h-auto'>
      <Header />
      <div className='md:flex max-w-7xl mx-auto px-2'>
        <Courses
          handleSelect={handleSelect}
         />
        <Bookmarks
          bookmarks={bookmarks}
          remainingCredit={remainingCredit}
          creditHours={creditHours}
          price={price}
        />
      </div>
    </div>
  )
}

export default App
