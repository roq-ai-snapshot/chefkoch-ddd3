import * as yup from 'yup';
import { reservationValidationSchema } from 'validationSchema/reservations';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  user_id: yup.string().nullable().required(),
  reservation: yup.array().of(reservationValidationSchema),
});
