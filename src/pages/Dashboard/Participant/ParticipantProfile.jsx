import React from 'react';
import useFindProfile from '../../../hooks/useFindProfile';
import { useForm } from "react-hook-form";
import Heading from '../../../Shared/Heading';

const ParticipantProfile = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    const profile = useFindProfile();
    return (
        <div className="border shadow-lg mx-5 rounded-xl text-center min-h-screen">
            <Heading
                heading={"Update Profile"}
            ></Heading>
            <div className='w-2/3 mx-auto border rounded-lg p-6 shadow-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>

                        </label>
                        <input
                            {...register('name')}
                            type="text" placeholder="Type here" className="input input-bordered w-full " />

                    </div>
                    <div className="flex gap-6">
                        {/* category  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>

                            </label>
                            <select
                                defaultValue="default"
                                {...register('category')}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soup</option>
                                <option value="dessert">dessert</option>
                                <option value="drinks">drinks</option>
                            </select>

                        </div>


                        {/* price  */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>

                            </label>
                            <input
                                {...register('price')}
                                type="number" placeholder="Type price" className="input input-bordered w-full " />

                        </div>

                    </div>

                    {/* recipe details  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>

                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </div>

                    <div className="form-control w-full my-6">
                        <input type="file" {...register('image')} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>


                    <button className="btn">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default ParticipantProfile;