import React from "react"; 
import "./SendMail.css"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from "@material-ui/core"; 
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice"
import { db } from "./firebase";
import firebase from "firebase"

function SendMail () {
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = formData => {
        console.log(formData);

        db.collection('emails').add({
             to: formData.to, 
             subject: formData.subject, 
             message: formData.message, 
             timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }); 

        dispatch(closeSendMessage()); 
    }
  
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    htmlFor="to" 
                    placeholder="To:" 
                    type="email" 
                    {...register("to", { required: true })}
                />
                {errors.to && errors.to.type === "required" && <p className="sendMail__error">To is Required</p>}

                <input 
                    htmlFor="subject" 
                    placeholder="Subject" 
                    type="text"
                    {...register("subject", { required: true })}
                />
                {errors.subject && errors.subject.type === "required" && <p className="sendMail__error">Subject is Required</p>}

                <input 
                    htmlFor="message"
                    placeholder="Message..." 
                    type="text"
                    className="sendMail__message"
                    {...register("message", { required: true })}
                />
                {errors.message && errors.message.type === "required" && <p className="sendMail__error">Message is Required</p>}

                <div className="sendMail__options">
                    <Button className="sendMail__send"
                    variant="contained"
                    color="primary"
                    type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail; 

// In terminal type "npm add react-hook-form"
// Register error solution : https://stackoverflow.com/questions/66927729/ref-register-inside-input-is-giving-me-a-path-split-error/66927781#66927781
// Form error solution : https://react-hook-form.com/advanced-usage