import { useRouteError } from "react-router-dom"
const Error = ()=>{
    const err= useRouteError();
    console.log(err)
    return(
        <h1>Error page 404 Not Found</h1>
    )
}
export default Error