import React from 'react'
import { useForm } from "react-hook-form";

function Register() {
    const {register, handleSubmit, errors} = useForm(
        {criteriaMode: 'all', mode: "onSubmit"})

    function onSubmit(data) {
            console.log(data)
    }

    return (
        <div id='register'>
            <h1>Register</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam architecto debitis, in
                labore laboriosam libero, minima minus nobis pariatur qui ratione repellat reprehenderit repudiandae
                sunt tempore voluptatibus. A accusantium ad, cum eligendi incidunt laborum magnam officia possimus
                reiciendis rerum, tempora vero!</p>
            <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='username'>Gebruikersnaam:
                    <input
                        name='username'
                        type='text'
                        ref={register({
                            required: 'Voer een gebruikersnaam in!'
                        })}
                    /></label>
                {errors.username && <p className='error'>{errors.username.message}</p>}
                <label htmlFor='email'>E-mail:
                    <input
                        name='email'
                        type='email'
                        ref={register({
                            required: 'Voer een e-mail adres in!'
                        })}
                    /></label>
                {errors.email && <p className='error'>{errors.email.message}</p>}
                <label htmlFor='password'>Wachtwoord:
                    <input
                        name='password'
                        type='password'
                        ref={register({
                            required: 'Voer een wachtwoord in!'
                        })}
                    /></label>
                {errors.password && <p className='error'>{errors.password.message}</p>}
                <button name='submit' type='submit'>
                    Log in!
                </button>
            </form>
        </div>
    )
}

export default Register
