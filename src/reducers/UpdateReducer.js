
const InitialState={
    name:"Huzaifah",
    age:20,
    status:"single"
  }

export default (state=InitialState,action)=>{
if(action.type==="UPDATE_AGE")
{
    return{
        ...state,
        age:action.payload
    }
}
else if(action.type==="UPDATE_NAME")
{
    return{
        ...state,
        name:action.payload
    }
}

else if(action.type==="UPDATE_STATUS")
{
    return{
        ...state,
        status:action.payload
    }
}
return state
}