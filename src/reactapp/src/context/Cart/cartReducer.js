import { setCartEmail } from './email/reducers';
import { SET_CART_EMAIL } from './email/types';
import { setGuestCartInfo } from './guestCart/reducers';
import { SET_GUEST_CART_INFO } from './guestCart/types';
import { setCartShippingAddresses } from './shippingAddress/reducers';
import { SET_CART_SHIPPING_ADDDRESSES } from './shippingAddress/types';

const actions = {
  [SET_CART_EMAIL]: setCartEmail,
  [SET_GUEST_CART_INFO]: setGuestCartInfo,
  [SET_CART_SHIPPING_ADDDRESSES]: setCartShippingAddresses,
};

function cartReducer(state, { type, payload }) {
  const action = actions[type];

  if (action) {
    return action(state, payload);
  }

  return state;
}

export default cartReducer;
