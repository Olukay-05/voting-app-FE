import React, { useState } from 'react';



const Card = ( { candidate, onRadioChange } ) => {

    const { imageUrl, id, fullName, email, noOfVotes  } = candidate;

    const [isChecked, setIsChecked] = useState(false);


    const handleRadioChange = () => {
        setIsChecked(true);
        onRadioChange(candidate.id);
      };


  return (
    <div className="card">
        <fieldset>
            <div>
                <img 
                    src={ imageUrl }
                    alt={ fullName }
                    className="card-img-top"
                />
            </div>

            <div className="card-body">
                <h5 className="card-title">Name: { fullName }</h5>
                <p className="card-text">id: { id }</p>
                <p className="card-text">email: { email }</p>
                <p className='card-text'>no of votes: { noOfVotes }</p>
                <div className="form-check">

                    <input 
                        type="radio"
                        className="form-check-input"
                        id={ `radio-${ candidate.id }` }
                        name={ noOfVotes }
                        checked={isChecked}
                        onChange={ handleRadioChange }
                    />

                    <label className="form-check-label" htmlFor={`radio-${ candidate.id }`}>
                        Vote for { fullName }
                    </label>
                </div>
            </div>  
        </fieldset>
    </div>
  )
}

export default Card;