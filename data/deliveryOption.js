export const deliveryOptions=[{
  id:'1',
  deliveryDays:7,
  priceRupee:0
},{
  id:'2',
  deliveryDays:3,
  priceRupee:40
},{id:'3',
deliveryDays:1,
priceRupee:80}
];

export function getDeliveryOption(deliveryOptionId){
  
  let deliveryOption;
  deliveryOptions.forEach((option)=>{
    if(option.id===deliveryOptionId){
      deliveryOption=option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}