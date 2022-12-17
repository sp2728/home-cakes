import React from 'react'

import Spinner from 'react-bootstrap/Spinner';
import checkCircle from '../../assets/images/checkmark.svg';
import ContactForm from '../../components/contact-form/contact-form';
import Sheet, { SheetPosition } from '../../components/sheet/sheet';
import './contact.css';

enum FormStatus {
    Initial, Submitted, Loading, Success
}


interface ContactData {
    name: string;
    email: string;
    description: string;
}

interface Props {
    open: boolean;
    handleClose: any;
    position?: SheetPosition;
}

const Contact = ({ open, handleClose, position = SheetPosition.right }: Props) => {

    const defaultValues: ContactData = {
        name: '',
        email: '',
        description: ''
    }

    const [formStatus, setFormStatus] = React.useState(FormStatus.Initial);
    const [data, setData] = React.useState(defaultValues);

    const handleForm = (e: any) => {
        setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSubmit = () => {
        setFormStatus(FormStatus.Loading);

        //TODO: Call api to send email notification
        setTimeout(() => {
            setFormStatus(FormStatus.Success)
        }, 2000)
    }

    React.useEffect(() => {
        setData(defaultValues);
        setFormStatus(FormStatus.Initial);
    }, [open])

    const Loader = () => {
        return (
            <div>
                <Spinner animation="border" />
                <p> Please wait while we submit your request. </p>
            </div>
        )
    }

    const SubmitResponse = () => {
        return (
            <div>
                <img src={checkCircle} />
                <p> Thank you for submiting your request. We will get back to you shortly. </p>
            </div>
        )
    }


    return (
        <Sheet open={open} position={position} handleClose={handleClose}>
            <div className='contact-title'> Contact Us</div>
            {formStatus === FormStatus.Loading && <Loader />}
            {formStatus === FormStatus.Success && <SubmitResponse />}
            {formStatus === FormStatus.Initial && <ContactForm data={data} handleForm={handleForm} handleSubmit={handleSubmit} />}
        </Sheet>

    )
}

export default Contact