import { FormEvent, useRef } from "react";




export default function Form() {

	const name_reference = useRef<HTMLInputElement>(null);
	const age_reference = useRef<HTMLInputElement>(null);
	const person = { name: '', age: 0 }
	
	const handleSubmit = (event: FormEvent) =>{

		if(name_reference.current !== null){
			person.name = name_reference.current.value;
		}

		if(age_reference.current !== null){
			person.age = parseInt(age_reference.current.value);
		}

		console.log(person)
		
		event.preventDefault();
	}

	return (
		<form className="m-5" onSubmit={(event)=>handleSubmit(event)}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">Name</label>
				<input id="name" type="text" className="form-control" ref={name_reference}/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">Age</label>
				<input id="age" type="number" className="form-control" ref={age_reference} />
			</div>
			<button className="btn btn-primary" type="submit">Submit</button>
		</form>
	)
}
