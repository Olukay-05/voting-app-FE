import React from 'react'

const card = ( { candidate, onCheckboxChange } ) => {

    const { imageUrl, id, fullName, email, numberOfVotes  } = candidate;

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
                <h5 className="card-title">{ fullName }</h5>
                <p className="card-text">{ id }</p>
                <p className="card-text">{ email }</p>

                <div className="form-check">
                    <input 
                        type="checkbox"
                        className="form-check-input"
                        id={ `checkbox-${ candidate.id }` }
                        name={ numberOfVotes }
                        onChange={ () => onCheckboxChange( candidate.id ) }
                    />

                    <label className="form-check-label" htmlFor={`checkbox-${ candidate.id }`}>
                        Vote for { fullName }
                    </label>
                </div>
            </div>
        </fieldset>
    </div>
  )
}

export default card;