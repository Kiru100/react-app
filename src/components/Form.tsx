import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
	name: z.string().min(3),
	age: z.number().min(18)
});

type FormData =  z.infer<typeof schema>;

export default function Form() {
	const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});
	const onSubmit = (data: FieldValues) => console.log(data);

	return (
		<form className="m-5" onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">Name</label>
				<input 
					{...register("name")}				
					id="name" 
					type="text"
					className="form-control" 
				/>
				{ errors.name && <p className="text-danger">{errors.name.message}</p>}				
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">Age</label>
				<input 
					{...register("age")}
					id="age" 
					type="number" 
					className="form-control" 
				/>
				{ errors.age && <p className="text-danger">{errors.age.message}</p>}			
			</div>
			<button className="btn btn-primary" type="submit">Submit</button>
		</form>
	)
}
