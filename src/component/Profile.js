import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {} from 'react-redux'

const Profile = () => {
    const {name,age,status}=useSelector((state)=>
    {
        return state
    })

    const dispatch = useDispatch()

    const update =()=>
    {
dispatch({type:'UPDATE_AGE',payload:30})
dispatch({type:"UPDATE_NAME",payload:"Sir Arshad"})
dispatch({type:"UPDATE_STATUS",payload:"Maried"})
    }
    return (
        <div>
            <h2>My Name Is:{name} </h2>
            <h2>My Age Is:{age} </h2>
            <h2>My Gender Is:{status} </h2>
            <button onClick={()=>update()}>Update</button>
        </div>
    )
}

export default Profile
