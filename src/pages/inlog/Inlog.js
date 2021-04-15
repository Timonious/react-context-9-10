import React from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import userData from '../../data/userData.json'

function Login() {
    const {register, handleSubmit, errors} = useForm(
        {criteriaMode: 'all', mode: "onSubmit"})
    const history = useHistory();

    function onSubmit(data) {
        const findUser = (uName) => {
            return uName.userName === data.username
        }
        const userFinder = userData.find(findUser)
        if (userFinder.password === data.password) {
            console.log(data)
            history.push('/profile');
        } else {
            alert('Helaas, die naam en wachtwoord combinatie is FOUT!')
        }
    }

    return (
        <div id='login-page'>
            <h1>Login Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam architecto debitis, in
                labore laboriosam libero, minima minus nobis pariatur qui ratione repellat reprehenderit repudiandae
                sunt tempore voluptatibus. A accusantium ad, cum eligendi incidunt laborum magnam officia possimus
                reiciendis rerum, tempora vero!</p>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='username'>Gebruikersnaam:
                    <input
                        name='username'
                        type='text'
                        ref={register({
                            required: 'Voer een gebruikersnaam in!'
                        })}
                    /></label>
                {errors.username && <p className='error'>{errors.username.message}</p>}
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

export default Login
