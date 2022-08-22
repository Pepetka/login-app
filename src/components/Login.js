import { useDispatch } from "react-redux"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import Form from "./Form"
import { setUser } from "store/slices/userSlice"

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogin = (email, password) => {
		const auth = getAuth()

		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				)
				navigate("/", { replace: true })
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message

				console.log(errorCode, errorMessage)
			})
	}

	return <Form title={"Login"} onSubmit={handleLogin} />
}

export default Login
