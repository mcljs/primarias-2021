import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }


    return (
        <>
<section class="min-h-screen flex items-stretch text-white ">
        <div class="animate__animated animate__fadeIn lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{backgroundImage: "url(" + "https://venezuelanalysis.com/files/images/%5Bsite-date-yyyy%5D/%5Bsite-date-mm%5D/congreso-psuv.jpg" + ")",}}>
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="w-full px-24 z-10">
                <h1 class="text-5xl font-bold text-left tracking-wide">Comandante Hugo Chávez</h1>
                <p class="text-3xl my-4">No hay amor más grande que el que uno siente aquí en el pecho por una causa, por una patria, por una gente, por un pueblo, por la causa humana</p>
            </div>
            <div class="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                <span>
                    <img src="/psuv.png"/> 
                </span>
            </div>
        </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{backgroundColor: '#161616'}}>
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" >
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">
             
                <div class="py-6 space-x-2 text-4xl font-bold">
               SGSC PSUV 2021 - APC
                </div>
              
                <form  onSubmit={ handleLogin } class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto animate__animated animate__fadeIn animate__faster">
                    <div class="pb-2 pt-4">
                        <input    
                            type="text"
                    placeholder="Correo"
                    name="email"
                                      autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange } className="block w-full p-4 text-lg rounded-sm bg-black"/>
                    </div>
                    <div class="pb-2 pt-4">
                        <input className="block w-full p-4 text-lg rounded-sm bg-black"   type="password"
                    placeholder="Contraseña"
                    name="password"
                  
                    value={ password }
                    onChange={ handleInputChange }/>
                    </div>
                    <div class="text-right text-gray-400 hover:underline hover:text-gray-100">
                          <Link 
                    to="https://www.psuv-primarias.tk/"
                
                >
                    Regresar a sitio web    
                </Link>
                    </div>
                    <div class="px-4 pb-2 pt-4">
                        <button      type="submit"
                
                    disabled={ loading } class="uppercase block w-full p-4 text-lg rounded-full bg-red-500 hover:bg-red-600 focus:outline-none">Ingresar</button>
                    </div>

                  <div class=" p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-24 lg:hidden ">
                    
                    <img src="/psuv.png"/> 
             
                    </div>
                </form>
            </div>
        </div>
    </section>  
                  </>
    )
}
