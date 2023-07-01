import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {MDBModal,MDBModalDialog,MDBModalContent} from 'mdb-react-ui-kit'

const loadingToRedirect = () => {
    const[count, setCount] = useState(5)
    const navigate = useNavigate();
  
    useEffect{() =>{
      const interval = setInterval({} => {
        setCount{(currentCount) => currentCount = 1}
      }1000)
      
      return() => clearInterval(interval);
      count === 0 && Navigate("/auth");
    }, (count, navigate)}
  return (
    <div className='vh-100 gradient-custom'>
        <MDBModal show{true}>
           <MDBModalDialog centered>
             <MDBModalContent>
               <p className='mt-3'>Redirecting you in {count} sec</p>
            </MDBModalContent>
         </MDBModalDialog>
        </MDBModal>
    </div>

  )
}

export default loadingToRedirect
