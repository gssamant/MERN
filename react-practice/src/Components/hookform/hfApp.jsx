import React from 'react'
import { useForm } from 'react-hook-form'
import './hf.css'
const HookFormApp = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm();

	async function onSubmit(data) {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log("submitting the form", data);
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label>First Name: </label>
				<input className={errors.firstname ? 'input-error':""}
					{...register('firstname',
					{
						required: true,
						minLength: { value: 4, message: 'length at least 4' },
					}
				)} />
				{errors.firstname && <p className='error-msg'>{errors.firstname.message}</p>}
			</div>
			<div>
				<label>Middle Name: </label>
				<input {...register('middlename')} />
			</div>
			<div>
				<label>Last Name: </label>
				<input className={errors.lastname ? 'input-error' : ""}
					{...register('lastname', {
						pattern: {
							value: /^[A-Za-z]+$/i,
							message:"last name not valid",
					}
					})} />
				{errors.lastname && <p className='error-msg'>{errors.lastname.message}</p>}
			</div>
			<br />
			<input type='submit' disabled={isSubmitting} value={isSubmitting ? 'Submitting' : 'Submit'}></input>
		</form>
	)
}

export default HookFormApp
