import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@material-ui/core/Grid';

const validationSchema = Yup.object({
  banque: Yup.string().required('Bank is required'),
  number: Yup.string().required('Account number is required'),
  city: Yup.string().required('City is required'),
});

function Compte() {
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const formik = useFormik({
    initialValues: {
      banque: '',
      number: '',
      city: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} style={{ paddingLeft: isSmallScreen ? '10px' : '70px' ,paddingTop:isSmallScreen ? '70px':'0'}}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Bank"
            name="banque"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.banque}
            error={formik.touched.banque && Boolean(formik.errors.banque)}
            helperText={formik.touched.banque && formik.errors.banque}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Account Number"
            name="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
            margin="normal"
            fullWidth
          />
          <TextField
            label="City"
            name="city"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            margin="normal"
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} sm={6} style={{ paddingLeft: isSmallScreen ? '20px' : '70px' }}>
        <img

          src="https://th.bing.com/th/id/OIP.U1Z01QLX2ColZ1EepcPSrAAAAA?rs=1&pid=ImgDetMain"
          alt="Your Alt Text"
          style={{ maxWidth: '95%', marginBottom: '20px',borderRadius:'10px' }}
        />
      </Grid>
    </Grid>
  );
}

export default Compte;
