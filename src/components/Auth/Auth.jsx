import React,{ useImperativeHandle, useState } from "react";

function Auth({onSubmit},ref) {
    const [formDetails,setFormDetails] = useState({username:'',email:'',password:'',isLoading:false});

    function updateUserName(name){
        setFormDetails({...formDetails,username:name});
    }

    function updateEmail(mail){
        setFormDetails({...formDetails,email:mail});
    }

    function updatePassword(pass){
        setFormDetails({...formDetails,password:pass});
    }

    function handleSubmit(){
        setFormDetails({...formDetails,isLoading:true});
        onSubmit(formDetails)
    }

    function handleResetForm(){
        setFormDetails({username:'',email:'',password:'',isLoading:false});
    }

    useImperativeHandle(ref, () => {
        return {
            resetFormData: handleResetForm
        }
    }, []);


    return (
        <>
            <div className="input-group">
                        <input type="text" value={formDetails.username} onChange={(e)=>updateUserName(e.target.value)} className="form-control" placeholder="Username" id="loginUsername"/>
            </div>
            <div className="input-group">
                <input type="email" value={formDetails.email} onChange={(e)=>updateEmail(e.target.value)} className="form-control" placeholder="Email" id="loginEmail"/>
            </div>
            <div className="input-group">
                <input type="password" value={formDetails.password} onChange={(e)=>updatePassword(e.target.value)} className="form-control" placeholder="Password" id="loginPassword"/>
            </div>
            <div className="input-group">
            <button className="form-control btn btn-primary" type="button"  onClick={handleSubmit} disabled={formDetails.isLoading}>
               {formDetails.isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>} 
                {formDetails.isLoading ? 'Loading':'Submit'}
            </button>
        </div>
        </>
    )
}

export default React.forwardRef(Auth);