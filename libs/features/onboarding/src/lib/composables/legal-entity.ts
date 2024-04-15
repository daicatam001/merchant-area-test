import { useForm } from 'vee-validate';
import * as yup from 'yup'
yup.s
export const useLegalEntityForm = () => {
  const validate = yup.object({
    name: yup.string().required()
    // email: yup.string().email().required('Your email is required'),
    // first_name: yup.string().required('First name is required'),
    // last_name: yup.string().required('Last name is required'),
    // phone: yup.string().required('Phone number is required'),
    // phone_code: yup.mixed().nullable().required('Country code is required'),
    // recieve_notification: yup
    //   .boolean()
    //   .oneOf([true, false], 'This field is required'),
    // accept_policy: yup
    //   .boolean()
    //   .oneOf([true], 'Please accept the policies to continue'),
  });

  const initialValues = {
    name: '',
  };
  const { setFieldValue, handleSubmit, errors, values } = useForm({
    initialValues,
    validationSchema: validate,
  });
  const onSubmit = handleSubmit(async (values) => {
    try {
      // const payload = { ...values };
      // delete payload.accept_policy;
      // delete payload.recieve_notification;
      return true;
    } catch (error) {
      return false;
    }
  });
  return {
    setFieldValue,
    onSubmit,
    errors,
    values,
  }
}
