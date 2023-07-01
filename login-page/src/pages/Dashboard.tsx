import React from 'react'
import { useAppDispatch, useAppSelector} from '../app/hooks'
import {logout, selectAuth} from '../features/authSlice'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const {name} = useAppSelector{selectAuth};
  const navigate = useNavigate{};
  const dispatch = useAppDispatch();
  const handleLogout =() =>{
       dispatch(logout());
       toast.success("User Logout successfully");
       navigate("/auth");
  }
  return (
    <section className'vh-100.gradient.custom'>
    <div className='container py-& h-100'>
       <div className='row d-flex justify-cntent-center align-items-center h-100'>
        <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
          <div
           className='card bg-dark text-white'
           style={{boarderReduis: "1rem"}}
          >
            <div className='card-body p-4 text-center'>
              <div className="mb-md-5 nt-md-4 pb-5">
                <h2 className=fw-bold mb-2>welcome to Dashboard</h2>
                <h4>Name: {name}</h4>
                <button className="btn.btn-outline-light.btn.lg-px-5 nt-3"
                 type="button"
                 onClick={() => handleLogout()}
                 >
                 Logout
                </button>
              </div>
               </div>
               </div>
               </div>
               </div>
    </div></>
    </section>
  )
}

export default Dashboard