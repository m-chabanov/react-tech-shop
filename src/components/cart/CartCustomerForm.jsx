import {
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Button,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslation } from 'react-i18next';

const schema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'required' })
    .max(80, { message: 'tooLong' }),
  lastName: z
    .string()
    .min(1, { message: 'required' })
    .max(80, { message: 'tooLong' }),
  email: z.email({ message: 'invalidEmail' }),
  phone: z
    .string()
    .min(10, { message: 'phoneTooShort' })
    .max(15, { message: 'phoneTooLong' })
    .regex(/^\+?\d+$/, { message: 'onlyDigitsPlus' }),
  address: z
    .string()
    .min(1, { message: 'required' })
    .max(200, { message: 'tooLong' }),
  paymentMethod: z
    .enum(['cash', 'card'])
    .or(z.literal(''))
    .refine((v) => v !== '', { message: 'required' }),
  comments: z.string().max(500, { message: 'tooLong' }).optional(),
});

function CartCustomerForm({ submitOrder, isLoading }) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { paymentMethod: '' },
  });
  const onSubmit = (formData) => {
    submitOrder(formData);
  };
  return (
    <Paper
      component="form"
      noValidate
      sx={{
        py: 2,
        m: 2,
        '& .MuiGrid-grid-xs-6, & .MuiGrid-grid-xs-12': {
          p: 1,
        },
        '& .MuiTextField-root': {
          minWidth: '100%',
        },
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container sx={{ px: 1 }}>
        <Grid size={12}>
          <Typography variant="h4" sx={{ pb: 2 }}>
            {t('cart.form.fillTheForm')}
          </Typography>
        </Grid>
        <Grid size={6}>
          <TextField
            required
            autoComplete="given-name"
            label={t('cart.form.labels.firstName')}
            error={!!errors.firstName}
            helperText={
              errors.firstName &&
              t(`cart.form.errors.${errors.firstName?.message}`)
            }
            {...register('firstName')}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            required
            autoComplete="family-name"
            label={t('cart.form.labels.lastName')}
            error={!!errors.lastName}
            helperText={
              errors.lastName &&
              t(`cart.form.errors.${errors.lastName?.message}`)
            }
            {...register('lastName')}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            required
            autoComplete="email"
            label={t('cart.form.labels.email')}
            error={!!errors.email}
            helperText={
              errors.email && t(`cart.form.errors.${errors.email?.message}`)
            }
            {...register('email')}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            required
            label={t('cart.form.labels.phone')}
            autoComplete="tel"
            error={!!errors.phone}
            helperText={
              errors.phone && t(`cart.form.errors.${errors.phone?.message}`)
            }
            {...register('phone')}
          />
        </Grid>
        <Grid size={6}>
          <Controller
            control={control}
            name="paymentMethod"
            render={({ field }) => (
              <TextField
                required
                select
                id="payment-method-select"
                label={t('cart.form.labels.paymentMethod')}
                error={!!errors.paymentMethod}
                helperText={
                  errors.paymentMethod &&
                  t(`cart.form.errors.${errors.paymentMethod?.message}`)
                }
                {...field}
              >
                <MenuItem value="cash">Cash</MenuItem>
                <MenuItem value="card">Credit Card</MenuItem>
              </TextField>
            )}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            required
            label={t('cart.form.labels.address')}
            autoComplete="street-address"
            error={!!errors.address}
            helperText={
              errors.address && t(`cart.form.errors.${errors.address?.message}`)
            }
            {...register('address')}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            label={t('cart.form.labels.comments')}
            error={!!errors.comments}
            helperText={
              errors.comments &&
              t(`cart.form.errors.${errors.comments?.message}`)
            }
            {...register('comments')}
          />
        </Grid>
      </Grid>
      <Grid size={12} sx={{ alignItems: 'end' }}>
        <Button
          variant="outlined"
          disabled={isLoading}
          color="error"
          sx={{ m: 1 }}
          onClick={() => reset()}
        >
          {t('cart.form.buttons.clearForm')}
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ m: 1 }}
          type="submit"
          loading={isLoading}
        >
          {t('cart.form.buttons.confirmOrder')}
        </Button>
      </Grid>
    </Paper>
  );
}

export default CartCustomerForm;
