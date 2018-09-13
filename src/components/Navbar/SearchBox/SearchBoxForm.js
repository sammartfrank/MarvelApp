import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { search } from '../../../actions'
import './sty.css'

//plantearlo en REDUX FORM


const renderField = ({ input, label, type, meta: { touched, error} }) => (
	<div> 
		<input { ...input }  placeholder="Search..." type={ type }/>
	    <button className="btn btn-outline-danger btn-lg" style={{float: 'right'}} type="submit">Search</button>
  </div>
	)
let SearchBoxForm = ({ handleSubmit, submitSucceded, pristine, reset, subtmitting, error }) => (
	<div className="container" style={{float:'right'}}>
		<form onSubmit={ handleSubmit }>
	     	<Field name="keywords" component={ renderField } className="form-control" type="text"  aria-label="Search" />
	     	{/*error && <div className="alert alert-danger" role="alert">{error}</div>*/}
	  </form>
  </div>
	)
export default SearchBoxForm = reduxForm({
	form:'search',
	onSubmit: ( values, dispatch ) => {
		console.log( 'values', values)
		return dispatch( search( values.keywords )).catch( err => {
			throw new SubmissionError	({
				_error: 'Error in the Network'
			})
		})
	}
})( SearchBoxForm )