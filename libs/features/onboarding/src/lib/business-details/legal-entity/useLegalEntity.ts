import { useForm } from 'vee-validate';
import * as yup from 'yup'
export const useLegalEntityForm = () => {
  const validate = yup.object({
    dp_company_name: yup.string().required(),
    dp_reg_number: yup.string().required(),
    dp_tax_id: yup.string().required(),
    dp_co_id: yup.string().required(),
    dp_street: yup.string().required(),
    dp_city: yup.string().required(),
    dp_state: yup.string().required(),
    dp_zip_code: yup.string().required(),
  });

  const initialValues = {
    dp_company_name: '',
    dp_reg_number: '',
    dp_tax_id: '',
    dp_co_id: '',
    dp_street: '',
    dp_city: '',
    dp_state: '',
    dp_zip_code: '',
    dp_public_company: false
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
