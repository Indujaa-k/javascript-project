import{cart}from '../../data/cart.js';
import { getProduct} from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOption.js';

export function renderPaymentSummary(){
  let productRupee=0;
  let shippingPriceRupee=0;
cart.forEach((cartItem) => {
  const product=getProduct(cartItem.productId);
  productRupee+=product.pricerupee*cartItem.quantity;
  const deliveryOption= getDeliveryOption(cartItem.deliveryOptionId);  
 shippingPriceRupee+=deliveryOption.priceRupee;

});
const totalBeforeTaxRupee= productRupee+shippingPriceRupee;
const taxrupee=totalBeforeTaxRupee*0.05;
const totalRupee=totalBeforeTaxRupee+taxrupee;

let cartQuantity=0;
cart.forEach((cartItem)=>{
  cartQuantity+=cartItem.quantity
});

const paymentSummaryHTML=`
<div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (${cartQuantity}):</div>
        <div class="payment-summary-money">
        ₹${productRupee}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">
        ₹${shippingPriceRupee}</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">
         ₹${totalBeforeTaxRupee}</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (5%):</div>
        ₹${Math.round(taxrupee)}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">
        ₹${Math.round(totalRupee)}</div>
      </div>

      <button class="place-order-button button-primary">
        Place your order
      </button>
`;
document.querySelector('.js-payment-summary')
.innerHTML=paymentSummaryHTML;
}