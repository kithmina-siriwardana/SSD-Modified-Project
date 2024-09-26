import { useEmpAuthContext } from "./useEmpAuthContext"

export const useLogout = () => {
    const {dispatch} = useEmpAuthContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('employee')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}