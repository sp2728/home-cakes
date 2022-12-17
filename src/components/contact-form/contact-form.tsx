import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './contact-form.css';

interface Props {
    data: any;
    handleForm: any;
    handleSubmit:()=>any;
}
const ContactForm = ({ data, handleForm, handleSubmit}: Props) => {
    return (
        <Form className='contact-form' onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Control className="contact-form-control" type="text" placeholder="Name" name='name' value={data.name} onChange={handleForm} />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Control className="contact-form-control" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Control className="contact-form-control" as="textarea" rows={4} placeholder="Description" />
            </Form.Group>
            <Button className='contact-submit-btn' type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ContactForm