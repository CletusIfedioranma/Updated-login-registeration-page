import { useSelector } from 'react-redux'
import{selectAuth} from "../features/authSlce";
Import loadingToRedirect from "./LoadingToRedirect";


const privateRoute = ({children}: {children: any} => {
const {token} = useSelector(selectAuth);
  return token ? children : <loadingToRedirect/>;
}

export default privateRoute
