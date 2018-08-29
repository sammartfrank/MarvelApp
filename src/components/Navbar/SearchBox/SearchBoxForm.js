import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { search } from '../../../actions'
//plantearlo en REDUX FORM

const renderField = ({ input, label, type, meta: { touch, error} }) => (
	<div> 
		<input { ...input } type={ type }/>
  </div>
	)

let SearchBoxForm = ({ handleSubmit, submitSucceded, pristine, reset, subtmitting, error }) => (
	<div className="container-fluid">
		<form onSubmit={ handleSubmit }>
	     	<Field name="search" component={ renderField } type="text"  aria-label="Search"  required />
	     	<button className="btn btn-outline-danger btn-lg" type="submit">Search</button>
	  </form>
  </div>
	)
export default SearchBoxForm = reduxForm({
	form:'search',
	onSubmit: ( values, dispatch ) => {
		console.log( 'values', values)
		return dispatch( search( values )).catch( err => {
			throw new SubmissionError	({
				_error: 'Error in the Search Engine'
			})
		})
	}
})( SearchBoxForm )