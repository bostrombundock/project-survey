import React from 'react'

const SummitBtn = ({ nameInput, typeInput, buyInput }) => {

  return (
    <form>
      <div className="summary-container">
        <h1> Here is your summary. Happy biking!</h1>
        <div className="summary-box">
          <p> {nameInput}! </p>
          <p> You have chosen {typeInput} </p>
          <p> and place to buy it: {buyInput}  </p>

        </div>
      </div>

    </form>
  )
}
export default SummitBtn      
