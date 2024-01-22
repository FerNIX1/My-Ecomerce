import { useForm} from "react-hook-form";
import { EmailValidation,MaxPassword,MinPassword } from "../utils/validators";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";
export const Signin=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm();
    const auth = getAuth(app);
    /* console.log(errors); */
    /* console.log(watch("email")); */
    const createUser=async(data)=>{
        try {
            const response= await createUserWithEmailAndPassword(auth,data.email,data.password);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
return(
    <>
 <div className="fondo">
        <section className="Container d-flex align-items-center justify-content-center">
            <div className="row">
            <h1 className="text-white">Welcome</h1>
        <div className="card" style={{width: "28rem"}}>
  <div className="card-body">
    <h2>Create New User</h2>
    <form onSubmit={handleSubmit(createUser)}>
        <div className="mb-3">
            <input type="text" className="form-control" name="email" {...register("email",{required:"email is required",pattern:EmailValidation})} placeholder="type your email"/>
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
        </div>
        <div className="mb-3">
            <input type="password" className="form-control" name="password" {...register("password",{required:"password is required",maxLength:MaxPassword,minLength:MinPassword})} placeholder="password" />
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
            
        </div>
        <div className="mb-3">
            <button type="submit" className="btn btn-secondary">Create Acount</button>
        </div>
    </form>
    </div>
  </div>
</div>
        </section>
        </div>
        </>
);
};