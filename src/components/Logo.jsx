export default function Logo({ size = "40px" }) {
  return (
    <img
      src="/logo.svg"
      alt="Coinlingo Logo"
      style={{
        width: size,
        height: size,
        objectFit: "contain"
      }}
    />
  );
}
