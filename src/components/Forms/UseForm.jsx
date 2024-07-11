import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './UserForm.module.css';
import * as Yup from 'yup';

export const UserForm = () => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required('This field is required')
      .min(3, 'mast be more 3')
      .max(20, 'mast be less 20'),
    surname: Yup.string()
      .required('This field is required')
      .min(3, 'mast be more 3')
      .max(20, 'mast be less 20'),
    age: Yup.number()
      .required('This field is required')
      .min(14, 'mast be more 3')
      .max(99, 'mast be less 20'),
    role: Yup.string().oneOf(['admin', 'user']),
    email: Yup.string().email('email is not valid'),
  });

  const initialValues = {
    name: ' ',
    surname: ' ',
    age: ' ',
    email: '',
    role: 'user',
    city: '',
    about: '',
  };
  const handleSubmit = (date, actions) => {
    console.log(actions);
    actions.resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.lable}>
            <span>Name:</span>
            <Field className={s.input} name="name" />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.lable}>
            <span>Surname:</span>
            <Field className={s.input} name="surname" />
            <ErrorMessage name="surname" component="span" className={s.error} />
          </label>
          <label className={s.lable}>
            <span>Age:</span>
            <Field className={s.input} name="age" />
            <ErrorMessage name="age" component="span" className={s.error} />
          </label>
          <label className={s.lable}>
            <span>Email:</span>
            <Field className={s.input} name="email" />
            <ErrorMessage name="email" component="span" className={s.error} />
          </label>
          <label className={s.lable}>
            <span>City:</span>
            <Field className={s.input} name="city" />
            <ErrorMessage name="city" component="span" className={s.error} />
          </label>
          <label className={s.lable}>
            <span>Role</span>
            <Field className={s.input} name="role" as="select">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Field>
            <ErrorMessage name="role" component="span" className={s.error} />
          </label>
          <label className={s.lable}>
            <span>About</span>
            <Field className={s.input} as="textarea" name="about"></Field>
            <ErrorMessage name="about" component="span" className={s.error} />
          </label>
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};
