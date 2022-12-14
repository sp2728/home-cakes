import classNames from 'classnames';
import React from 'react'
import './sheet.css';

import Spinner from 'react-bootstrap/Spinner';
import checkCircle from '../../assets/images/checkmark.svg';
import ContactForm from '../contact-form/contact-form';

interface Props {
    open: boolean;
    position: 'top' | 'bottom' | 'left' | 'right';
    handleClose: () => void;
}

interface ContactData {
    name: string;
    email: string;
    description: string;
}

enum FormStatus {
    Initial, Submitted, Loading, Success
}


const Sheet = React.memo(({ open, position, handleClose }: Props) => {

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
        console.log(data);
        setFormStatus(FormStatus.Loading);

        //TODO: Call api to send email notification
        setTimeout(() => {
            setFormStatus(FormStatus.Success)
        }, 2000)
    }

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

    React.useEffect(()=> {
        setData(defaultValues);
        setFormStatus(FormStatus.Initial);
    }, [open])

    return (
        <>
            {open && <div className={classNames('backdrop', position)} onClick={handleClose}></div>}
            <div className={classNames('sheet-container', { 'open': open, }, position)}>
                <div style={{width: '100%'}}>
                    <div className='sheet-title'> Contact Us</div>
                    {formStatus === FormStatus.Loading && <Loader />}
                    {formStatus === FormStatus.Success && <SubmitResponse />}
                    {formStatus === FormStatus.Initial && <ContactForm data={data} handleForm={handleForm} handleSubmit={handleSubmit} />}
                </div>

            </div>
        </>
    )
})

export default Sheet