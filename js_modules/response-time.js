export default function getResponseTime(response) {
  return (
    response.timings.blocked +
    response.timings.connecting +
    response.timings.tls_handshaking +
    response.timings.sending +
    response.timings.waiting +
    response.timings.receiving
  );
}
