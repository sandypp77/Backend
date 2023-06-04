const Razorpay = require("razorpay");
const instance = new Razorpay({
  key_id: "rzp_test_sU751OCZJsoE0q",
  key_secret: "kJWTs5l0i1BA68XOqutwoEjR",
});

const checkout = async (req, res) => {
  const { amount } = req.body;
  const option = {
    amount: amount * 100,
    currency: "USD",
  };
  const order = await instance.orders.create(option);
  res.json({
    success: true,
    order,
  });
};

const paymentVerification = async (req, res) => {
  const { razorpayPaymentId, razorpayOrderId } = req.body;
  res.json({
    razorpayPaymentId,
    razorpayOrderId,
  });
};

module.exports = {
  checkout,
  paymentVerification,
};
