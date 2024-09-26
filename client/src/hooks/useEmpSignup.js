import {useState} from 'react'
import { useEmpAuthContext } from './useEmpAuthContext'
import { useNavigate } from 'react-router-dom'

export const useSignup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useEmpAuthContext()

    const signup = async (name,dob, role,address, phone, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/employees/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name,dob, role,address, phone, email, password})
        })

        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            // save the user to local staorage
            // localStorage.setItem('employee', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            navigate("/employees");
        }
    }

    return {signup, isLoading, error}
}