import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "hooks/use-auth"
import { removeUser } from "store/slices/userSlice"
import { useAppDispatch } from "hooks/redux-hooks"

const HomePage = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	React.useEffect(() => {
		if (!isAuth) navigate("/login", { replace: true })
		// eslint-disable-next-line
	}, [isAuth])

	return (
		<div className='container'>
			<h1>Home</h1>

			<button onClick={() => dispatch(removeUser())} className='btn btn-primary'>
				Log Out
			</button>
		</div>
	)
}

export default HomePage
