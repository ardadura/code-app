import "./Footer.scss";
import {useFormik} from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    message: Yup.string()
        .required()
        .matches(/^[aA-zZ1234567890-=.,\s]+$/),
});

const Footer = ({clickSendMessage}) => {

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema,
        onSubmit: values => {
            clickSendMessage(formik.values.message)
            formik.resetForm()
        },
    });

    return <footer>
        <form onSubmit={formik.handleSubmit}>
            <input className="message-input"
                   name="message"
                   type="text"
                   placeholder="Message"
                   onChange={formik.handleChange}
                   value={formik.values.message}
            />
            <button type="submit">Send</button>
        </form>
    </footer>
}
export default Footer
