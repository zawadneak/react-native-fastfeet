export default function getDeliveries(pending, delivered) {
  return {
    type: '@deliveries/GET',
    payload: { pending, delivered },
  };
}
