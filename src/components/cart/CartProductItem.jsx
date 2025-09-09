import {
  Avatar,
  Badge,
  Grid,
  Paper,
  Typography,
  ButtonGroup,
  Button,
  TextField,
  Checkbox,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Price from '@/components/ui/Price';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export default function CartProductItem({
  item,
  setQuantity,
  removeItem,
  toggleSelected,
}) {
  const { t } = useTranslation();

  return (
    <Grid container sx={{ alignItems: 'center' }}>
      <Grid size={1}>
        <Checkbox
          aria-label="Select"
          checked={item.isSelected}
          onChange={() => toggleSelected(item.id)}
        />
      </Grid>
      <Grid size={11}>
        <Paper sx={{ m: 2 }} elevation={item.isSelected ? '4' : '1'}>
          <Grid container sx={{ alignItems: 'center', p: 2 }}>
            <Grid size={{ xs: 3, md: 1 }}>
              <Badge
                color="error"
                invisible={!item.price.percentage}
                badgeContent={`-${item.price.percentage}%`}
              >
                <Avatar
                  variant="rounded"
                  alt={`${t(
                    `products.types.${item.additionalInfo.type.name}`
                  )} ${t(
                    `products.manufacturers.${item.additionalInfo.manufacturer.name}`
                  )}`}
                  src={`/assets/images/${item.additionalInfo.type.name}.png`}
                  sx={{ height: 56, width: 56 }}
                />
              </Badge>
            </Grid>
            <Grid size={{ xs: 9, md: 5 }} sx={{ textAlign: 'left', p: 2 }}>
              <Typography>{`${t(
                `products.types.${item.additionalInfo.type.name}`
              )} ${t(
                `products.manufacturers.${item.additionalInfo.manufacturer.name}`
              )} ${item.title}`}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ py: { xs: 1, md: 0 } }}>
              <ButtonGroup
                variant="outlined"
                aria-label={t('cart.labels.setQuantity')}
              >
                <Button
                  onClick={() =>
                    setQuantity({ id: item.id, newQuantity: item.quantity - 1 })
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </Button>
                <TextField
                  sx={{ width: 80 }}
                  label={t('cart.labels.quantity')}
                  onChange={(e) =>
                    setQuantity({ id: item.id, newQuantity: +e.target.value })
                  }
                  color="primary"
                  type="number"
                  value={item.quantity}
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
                <Button
                  onClick={() =>
                    setQuantity({ id: item.id, newQuantity: item.quantity + 1 })
                  }
                >
                  +
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid size={{ xs: 6, sm: 3, md: 1 }} sx={{ py: { xs: 1, md: 0 } }}>
              <Price price={item.price} />
            </Grid>
            <Grid size={{ xs: 6, sm: 3, md: 2 }}>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => removeItem(item.id)}
              >
                <RemoveShoppingCartIcon sx={{ pr: 1 }} />
                {t('cart.buttons.remove')}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
