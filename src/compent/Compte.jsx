import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import api from './Api';

const validationSchema = Yup.object({
  banque: Yup.string().required('Bank is required'),
  number: Yup.string().required('Account number is required'),
  city: Yup.string().required('City is required'),
});

function Compte() {
  const formik = useFormik({
    initialValues: {
      banque: '',
      number: '',
      city: '',
      BanqueID: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const generatedBanqueID = Math.floor(Math.random() * 1000);
        const valuesWithID = { ...values, BanqueID: generatedBanqueID };
        const response = await api.post('/compte/create', {
          NumeroComte: values.number,
          BanqueID: valuesWithID.BanqueID,
          city: values.city,
          banqueName: values.banque,
        });
        console.log(response.data, 'api response');
      } catch (error) {
        // Handle error
      }
      // Handle form submission logic here
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} style={{ paddingLeft: '70px', paddingTop: '70px' }}>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formBanque">
              <Form.Label>Bank</Form.Label>
              <Form.Control
                type="text"
                name="banque"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.banque}
                isInvalid={formik.touched.banque && Boolean(formik.errors.banque)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.touched.banque && formik.errors.banque}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formNumber">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                name="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                isInvalid={formik.touched.number && Boolean(formik.errors.number)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.touched.number && formik.errors.number}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                isInvalid={formik.touched.city && Boolean(formik.errors.city)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.touched.city && formik.errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" block>
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={12} sm={6} style={{ paddingLeft: '20px' }}>
          <img
            src="https://th.bing.com/th/id/OIP.U1Z01QLX2ColZ1EepcPSrAAAAA?rs=1&pid=ImgDetMain"
            alt="Your Alt Text"
            style={{ maxWidth: '95%', marginBottom: '20px', borderRadius: '10px' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Compte;
