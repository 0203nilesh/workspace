import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css';
import { useDispatch } from 'react-redux';
import { display_alert } from '../../action/alert';
import { Login, Register } from '../../action/auth';

export default function Auth() {
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const [isAdmin, setIsAdmin] = useState(false);
    const [haveAccount , setHaveAccount]= useState(true);
    const [data, setData]= useState({name: "",email: "", user: "student", password: "" , code : "", confirmPassword: ""});
    const authData= JSON.parse(localStorage.getItem('auth'));
    function changeHandler(e){
        setData((prevData)=>{
            return{...prevData, [e.target.name]: e.target.value};
        })
    }

    function submitForm (e){
        e.preventDefault();
        if(data.password!==data.confirmPassword && data.confirmPassword!==''){
            dispatch(display_alert({message: "both password not matched", type: "warning"}));
        }else{
            if(data.user==='admin'){
                if(data.code === '12345'){
                    if(haveAccount){
                        const {name, code, confirmPassword, ...others}= data;
                        dispatch(Login(navigate, others));
                    }else{
                        const {code, confirmPassword, ...others}= data;
                        dispatch(Register(navigate,others));
                    }
                }else{
                    dispatch(display_alert({message: "Admin code not matched", type: "warning"}));
                }
            }else{
                if(haveAccount){
                    const {code, name, confirmPassword, ...others}= data;
                    dispatch(Login(navigate, others));
                }else{
                    const {code, confirmPassword, ...others}= data;
                    dispatch(Register(navigate,others));
                }
        }
        }
        setData({name: "",email: "", user: "student", password: "" , code : "", confirmPassword: ""});
    }
    
    useEffect(()=>{
       if(authData){
        if(authData?.user==="admin"){
            navigate('/adminView');
        }else{
            navigate(`/userView/${authData?._id}`);
        }
       }
    },[])
  return (
    <>
    {authData===null && (<>
    <div className="signup-container">
    <form  onSubmit={submitForm} className='signup-form'>
        <div className="heading child">
            <p>{haveAccount===true ? (<>Login Form</>) : (<>Registration Form </>)}</p>
        </div>
        <div className="inputs child">
            {!haveAccount && (<>
            <div className="name input-child">
                <label htmlFor="name">Name:- </label>
                <input onChange={changeHandler} value={data?.name} type="text" name="name" id="name" required/>
            </div>
            </>)}
            <div className="email input-child">
                <label htmlFor="email">Email:- </label>
                <input onChange={changeHandler} value={data?.email} type="email" name="email" id="email" required/>
            </div>
           {haveAccount===false && (<>
            <div className="user input-child">
                <input  onChange={changeHandler} onClick={()=>setIsAdmin(false)} value={'student'}  type="radio" name="user" id="student" defaultChecked required />
                <label htmlFor="student">Student</label>
                <input onClick={()=>{
                    setIsAdmin(true);
                }}  onChange={changeHandler}  type="radio" value={'admin'} name="user" id="admin" required />
                <label htmlFor="admin">Admin</label>
            </div>
           </>) }
            {isAdmin===true && (<>
            <div className="unique-code input-child">
                <label htmlFor="code">Id No.:- </label>
                <input  onChange={changeHandler} value={data?.code} type="text" name="code" id="code" required/>
            </div>
            </>)}
            <div className="password input-child">
               <div className="password-child p1">
               <label htmlFor="password">Password:- </label>
                <input  onChange={changeHandler} value={data?.password} type="password" name="password" id="password" required/>
                <i onClick={()=>{
                    const p1=document.getElementById("p1");
                    const x= document.getElementById('password');
                    if(data?.password!=="" && x.type==='password'){
                        p1.classList.remove('fa-eye-slash');
                        p1.classList.add('fa-eye');
                        x.type="text";
                    }else{
                        p1.classList.remove('fa-eye');
                        p1.classList.add('fa-eye-slash');
                        x.type="password";
                    }
                }} id='p1' className="fa-solid fa-eye-slash"></i>
               </div>
              {haveAccount===false && (<>
                <div className="password-child p2">
               <label htmlFor="confirmPassword">Confirm Password:- </label>
                <input  onChange={changeHandler} value={data?.confirmPassword} type="password" name="confirmPassword" id="confirmPassword" required/>
                <i onClick={()=>{
                    const p1=document.getElementById("p2");
                    const x= document.getElementById('confirmPassword');
                    if(data?.password!=="" && x.type==='password'){
                        p1.classList.remove('fa-eye-slash');
                        p1.classList.add('fa-eye');
                        x.type="text";
                    }else{
                        p1.classList.remove('fa-eye');
                        p1.classList.add('fa-eye-slash');
                        x.type="password";
                    }
                }} id='p2' className="fa-solid fa-eye-slash"></i>
               </div>
              </>)}
            </div>
        </div>
        <div className="buttons child">
            <button type="submit"> {haveAccount===true ? (<>Login</>) : (<>Register </>)}  </button>
        </div>
        <div className="links child">
        <p onClick={async()=>{
            setIsAdmin(false);
            if(haveAccount){
                setHaveAccount(false);
            }else{
                setHaveAccount(true);
            }
        }} > {haveAccount ===true ? (<>Don't have Account</>): (<>Already have Account</>)} </p>
        </div>
    </form>
</div>
    </>)}
    </>
  )
}
