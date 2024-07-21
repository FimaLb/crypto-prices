export default function CryptoPricesRows({ data }) {
  const { coins } = data;
  const rows = coins.map((coin) => {
    const { name, price, marketCap } = coin;
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{price}</td>
        <td>{marketCap}</td>
      </tr>
    );
  });

  return <>{rows}</>;
}
