import React,{useState,useEffect} from 'react'
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { ImGoogle } from 'react-icons/im';
import { TfiMicrosoftAlt } from 'react-icons/tfi';
import { useNavigate } from "react-router-dom";
import './login.css'
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';



function login() {

      const navigate = useNavigate() 
      const [show1, setshow1] = useState(false)
      const [err, seterr] = useState(false)
      const [notmatch, setnotmatch] = useState(false)
      const [empty, setempty] = useState(false)
      const [vaild_mail, setvaild_mail] = useState(false)
      const showpass1 =()=>{
            var x = document.getElementById("pass1");
            if (x.type === "password") {
            x.type = "text";
            } else {
            x.type = "password";
            }
           }


     const showpass2 =()=>{
      var x = document.getElementById("pass2");
      if (x.type === "password") {
      x.type = "text";
      } else {
      x.type = "password";
      }
     }
     useEffect(() => {
     fetch('http://localhost:8082/auth/google/callback').then((res)=>{
  
      if(res.status(200)){
            navigate("/login")
      }
     })
     }, [])
     
     const submetter = ()=>{
           const email = document.getElementById("email")
           const password = document.getElementById("pass1")
            const pass1 = document.getElementById("pass1")
         

            if((pass1.value.length != 0)&(email.value.includes('@')== true)&(email.value.includes('.')== true)){
                  fetch("http://localhost:8082/login",{
                        method:"POST",
                        headers:{"content-type":"application/json"},
                        body:JSON.stringify({
                             username:email.value,
                            password:password.value
                      })
                
                    }).then((res)=>{
                      console.log('llll',res.status);
                      if(res.status == 200 ){
                        navigate('/main_page')
                      }else {
                        seterr(true)
                      }
                    }
                  
                   
                     
                       
                    )
            }else if ((email.value.includes('@')== false)||(email.value.includes('.')== false)){
                  setvaild_mail(true)
                
            }else if(pass1.value != pass2.value){
                  setnotmatch(true)
            }else{
                  setempty(true)
            }

          
     }
      
     const onSuccess=(res)=>{
      console.log(res)
     }
     
     const onFailure=(res)=>{
      console.log(res)
     }

     const google= ()=>{
      window.open("http://localhost:8082/auth/google", "_self")
     }
     const facebook= ()=>{
      window.open("http://localhost:8082/auth/facebook", "_self")
     }
     const microsoft= ()=>{
      window.open("http://localhost:8082/auth/microsoft", "_self")
     }

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <div className='body_forsignup'>
              <h2 style={{color:"white"}}>Login</h2>

            
            <div className='label_inpt'>
                    <label htmlFor="">E-mail</label>
                    <div className='input_body'>
                         <input className='inp_class' id='email'  placeholder='Please enter your email' type={"email"} pattern={'/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'}/>
                    </div>
                   {vaild_mail&&
                        (<div style={{color:"#D34D42"}}>Please enter an email</div>)
                   }
                  
              </div>
              
              <div className='label_inpt'>
                    <label htmlFor="">Password</label>

                    <div className='input_body'>
                       <input className='inp_class' id='pass1' type="password" placeholder='Please enter your password' />

                          <div onClick={()=>{showpass1(),setshow1(!show1)}}>
                              {show1?
                                     <BiShow size={20}/>:
                                     <BiHide size={20}/>
                              }
                           
                          </div>

                    </div>
                    {empty &&
                    (<div style={{color:"#D34D42"}}>You can't leave password empty </div>)
                   }
                    {err&&
                        (<div style={{color:"#D34D42"}}>the password or email is incorrect</div>)
                   }
              </div>

            

              <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px",width:"100%"}}>
                <button className='submit_btn' id='submit' onClick={()=>{submetter()}}>Submit</button>
                 
              </div>
              <div style={{display:"flex",justifyContent:"end",width:"99%",color:"#b5b5b5",gap:"4px"}}>
                  dont have an account? <span onClick={()=>{navigate('/')}} style={{color:"#357beb",cursor:"pointer"}}>signup</span>
               </div>
                        <div style={{color:"white",margin:"0 auto"}}>Or</div>

                   <div className='buttons_holder'>
                        <div>
                           <button className='google_btn' onClick={google}><ImGoogle style={{color:"white"}} size={20}/><div>Log In With Google</div></button>
                         </div>

                         <div>
                           <button className='facebook_btn' onClick={facebook}><FaFacebookF style={{color:"white"}} size={20}/><div>Log In With Facebook</div></button>
                         </div>


                         <div>
                           <button className='micro_btn' onClick={microsoft}><TfiMicrosoftAlt size={20} /><div>Log In With Microsoft</div></button>
                         </div>
                   </div>
            
            


        </div>
    </div>
  )
}

export default login