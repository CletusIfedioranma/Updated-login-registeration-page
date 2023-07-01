import {useState, useEffect}from 'react'
import {useNavigate} from "react-router-dom"
import { MDBInput } from 'mdb-react-ui-kit'
import {useLoginUserMutation}from "../service/authApi"
import { useAppDispatch } from '../app/hooks'

const initialState ={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmpassword:""
}
const Auth = () => {
    const (formValue, setFormvalue) = useState(initialState);

    const {firstName, lastName, email, password confirmpassword} = formvalue
    const (showRegister, setShowRegister) = useState(false);
    const dispatch = useAppDispatch()
    
    const navigate = useNavigate();
    cost =[
      loginUsers, 
      {
        data: loginData 
        isSuccess: isLoginSuccess, 
        isError: isLoginError, 
        error:loginError,
      },
     ] = useLoginUserMutation();
     
     const [registerUser] = useRegisterMutation();
     cost =[
      loginUsers, 
      {
        data: registerData
        isSuccess: registerSuccess, 
        isError: registerError, 
        error: registerError,
      },
     const [registerUser] = useRegisterMutation()
    const navigate = useNavigate(); 
const handleChange = (e: any) => {
  setFormValue({...formValue, {e.target.name}: e.target.value}); 
};
  const handleLogin = async () => {
    if(email && password) {
  await useLoginUserMutation({email, password})
    } else{
      toast.error(please fill all input field)
    }
  };

const handleRegister =  async  () => {
  if(password !== confirmPassword) {
    return toast.error(password don't match)
  }
  if(firstName && lastName && password && email) {
    await registerUser({firstName, lastName, email, password});
  }
}

  useEffect{() => {
    i(isloginsucces) {
      toast.success ("User Login Successfully')
      dispatch(
        setUser ({name: loginData.result.name , token:loginData.token}))
      navigate('/dasheboards')
    }
    if(isregistersuccess) {
    toast.success ("User Register Successfully');
      dispatch(
        setUser ({name: RegisterData.result.name , token: registerData.token}))
      navigate('/dasheboards')
    }    
    }
  }, {isLoginSuccess, isRegisterSuccess}};

  useEffect({}  =>{

    if(isRegisterError) {
      toast.error{(isRegister as any).data.message}
    }
    if(isLoginerror) {
      toast.error{(loginError as any).data.message}
    }
  },[isLoginError, isRegisterError])
  return (
    <section className='vh-100 gradient-custom'>
     <div className='container py-4 h-100'>
      <div className='row d-flex justify-cntent-center align-items-center h-100'>
        <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
          <div
           className='card bg-dark text-white'
           style={{boarderReduis: "1rem"}}
          >
            <div className='card-body p-4 text-center'>
              <div className="mb-md-5 nt-md-4 pb-5">
                <h2 className='fw-bold mb-2 text-uppercase'>
                  {!showRegister ? 'Login': 'Register"}
                </h2>
                <p className='text-white-50 mb-4'>
                  {!showRegister ? 
                  ? "please enter your email and password" 
                  : "please enter user detail"}
                </p>
                {showRegister && (
                  <>
                  <div classname="form-outline form-white mb-4">
                  <MDBInput
                  type "text"
                  name 'firstName'
                  value (email)
                  onChange{handleChange}
                  label='firstName'
                  className= 'form-control form-control-lg'
                  />
              </div>
              <div classname="form-outline form-white mb-4">
                  <MDBInput
                  type = 'text'
                  name = 'lastName'
                  value=(lastName)
                  onChange{handleChange}
                  label='lastName'
                  className= 'form-control form-control-lg'
                  />
              </div>
                 
                  </>
                )}
                <div classname="form-outline form-white mb-4">
                  <MDBInput
                  type "email"
                  name 'email'
                  value (email)
                  onChange{handleChange}
                  label='Email'
                  className= 'form-control form-control-lg'
                  />
              </div>
              <div classname="form-outline form-white mb-4">
                  <MDBInput
                  type = 'password'
                  name = 'password'
                  value=(password)
                  onChange{handleChange}
                  label='password'
                  className= 'form-control form-control-lg'
                  />
              </div>
              {!showRegister && {
                <div classname="form-outline form-white mb-4">
                  <MDBInput
                  type = 'password'
                  name = 'confirmpassword'
                  value=(confirmpassword)
                  onChange{handleChange}
                  label='confirmpassword'
                  className= 'form-control form-control-lg'
                  />
              </div>
              }}
              {!showRegister ? (
                <button.
                  className='btn.btn-outline-light.btn-lg px-5' 
                 type='button'
                 onclick{() => handleLogin()}
                >
                 Login>
                </button>
                ): (
                 className= 'btn.btn-outline-light.btn-lg px-5' 
                  type='button'
                  onclick={() => handleRegister()}
                >
                  Register
                </button>
              )}
              </div>
              <div>
                <h5 className='mb-0'>
                 {!showRegister ? (
                  <>
                  Don't have an account ?
                    <p 
                    className='text-white-sp fw-bold'>
                      style={{cursor: 'pointer'}}
                      onclick={() => setshowRegister(true)}
                      sign up
                    </p>
                  </>
                 ): (
                    <>
                    Already have an account
                    <p
                     className='text-white-sp fw-bold'>
                     style={{cursor: 'pointer'}}
                      onclick={() => setshowRegister(false)}
                      sign in
                      </p>
                    </>

                 )}
                 </h5>

               </div>
            </div>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Auth
