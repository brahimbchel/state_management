import { useAuthStore } from '../store/useAuthStore'

const Auth = () => {
  const isAuth = useAuthStore(state => state.isAuth)
  const setIsAuth = useAuthStore(state => state.setIsAuth)
  return (
    <>
      <h1>{isAuth ? "User is authenticated" : "User is not authenticated"}</h1>

      <button onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? "Log Out" : "Log In"}
      </button>
    </>
  )
}

export default Auth