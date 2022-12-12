import React from 'react'

import { Button, CircularProgress } from '@mui/material';
import Drawer from '@mui/material/Drawer'
import TextField from '@mui/material/TextField';
import './contact.css';
import { CheckCircle } from '@mui/icons-material';

interface Props {
  show: boolean;
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

const Contact = ({ show, handleClose }: Props) => {

  const defaultValues: ContactData = {
    name: '',
    email: '',
    description: ''
  }

  const [formStatus, setFormStatus] = React.useState(FormStatus.Initial);
  const [data, setData] = React.useState(defaultValues);

  const handleForm = (e:any) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const handleSubmit = () => {
    setFormStatus(FormStatus.Loading);

    //TODO: Call api to send email notification
    setTimeout(() => {
      setFormStatus(FormStatus.Success)
    }, 2000)
  }

  React.useEffect(()=>{
    setTimeout(()=> {
      setFormStatus(FormStatus.Initial);
    },200)
  }, [show])

  const ContactForm = () => {

    return (<form onSubmit={handleSubmit}>
      <h2> Contact us </h2>
      <TextField
        type="text"
        className='form-control'
        label="Name"
        variant="outlined"
        name='name'
        value={data.name}
        onChange={handleForm}
      />
      <TextField
        type="text"
        className='form-control'
        label="Email"
        variant="outlined"
        name='email'
        value={data.email}
        onChange={handleForm}
      />
      <TextField
        type="text"
        multiline
        rows={4}
        className='form-control'
        label="Description"
        variant="outlined"
        name='description'
        value={data.description}
        onChange={handleForm}
      />

      <Button type='submit' variant='contained'> Submit </Button>
    </form>);
  }

  const Loader = () => {
    return (
      <div>
        <CircularProgress />
        <p> Please wait while we submit your request. </p>
      </div>
    )
  }

  const SubmitResponse = () => {
    return (
      <div>
        <CheckCircle color='success' fontSize='large'/>
        <p> Thank you for submiting your request. We will get back to you shortly. </p>
      </div>
    )
  }


  return (
    <Drawer
      anchor={'bottom'}
      open={show}
      onClose={handleClose}
    >
      <div className='contact-container'>
        {formStatus === FormStatus.Loading &&  <Loader/>}
        {formStatus === FormStatus.Success && <SubmitResponse/>}
        {formStatus === FormStatus.Initial && <ContactForm/>}
      </div>

    </Drawer>
  )
}

export default Contact