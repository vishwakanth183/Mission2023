export const cartRoute = "/cart"
export const cartSummary = "summary"
export const cartDelivery = "delivery"
export const paymentRoute = "payment"
export const summaryToDelivery = cartRoute + '/' + cartDelivery;
export const deliveryToSummary = cartRoute + '/' + cartSummary;
export const deliveryToPayment = cartRoute + '/' + paymentRoute;
export const homeRoute = "/"