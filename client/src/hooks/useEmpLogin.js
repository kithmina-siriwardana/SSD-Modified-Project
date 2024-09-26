import {useState} from 'react'
import { useEmpAuthContext } from './useEmpAuthContext'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useEmpAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/employees/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            // save the user to local staorage
            localStorage.setItem('employee', JSON.stringify(json))
            

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            navigate("/emp-profile");
        }
    }

    return {login, isLoading, error}
}