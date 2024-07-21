import { useEffect, useState } from "react";
import CryptoPricesRows from "../CryptoPricesRow/CryptoPricesRow";

const CRYPTO_PRICES_API_BASE_URL =
  "https://api.frontendexpert.io/api/fe/cryptocurrencies";
const cryptoPricesData = {
  0: {
    coins: [
      { name: "Bitcoin", price: "$29,970.48", marketCap: "$571,108,740,782" },
      { name: "Ethereum", price: "$2,064.89", marketCap: "$249,824,561,307" },
      { name: "Tether", price: "$0.9986", marketCap: "$78,663,362,207" },
      { name: "USD Coin", price: "$1.00", marketCap: "$50,503,234,574" },
      { name: "BNB", price: "$295.25", marketCap: "$48,341,424,542" },
      { name: "XRP", price: "$0.4248", marketCap: "$20,529,830,618" },
      { name: "Cardano", price: "$0.5497", marketCap: "$18,818,248,515" },
      { name: "Binance USD", price: "$1.00", marketCap: "$17,364,168,321" },
      { name: "Solana", price: "$51.46", marketCap: "$17,337,608,684" },
      { name: "Dogecoin", price: "$0.08981", marketCap: "$11,915,806,122" },
    ],
    hasNext: true,
  },
  1: {
    coins: [
      { name: "Bitcoin1", price: "$29,970.48", marketCap: "$571,108,740,782" },
      { name: "Ethereum1", price: "$2,064.89", marketCap: "$249,824,561,307" },
      { name: "Tether1", price: "$0.9986", marketCap: "$78,663,362,207" },
      { name: "USD Coin1", price: "$1.00", marketCap: "$50,503,234,574" },
      { name: "BNB1", price: "$295.25", marketCap: "$48,341,424,542" },
      { name: "XRP1", price: "$0.4248", marketCap: "$20,529,830,618" },
      { name: "Cardano1", price: "$0.5497", marketCap: "$18,818,248,515" },
      { name: "Binance USD1", price: "$1.00", marketCap: "$17,364,168,321" },
      { name: "Solana1", price: "$51.46", marketCap: "$17,337,608,684" },
      { name: "Dogecoin1", price: "$0.08981", marketCap: "$11,915,806,122" },
    ],
    hasNext: true,
  },
  2: {
    coins: [
      { name: "Bitcoin2", price: "$29,970.48", marketCap: "$571,108,740,782" },
      { name: "Ethereum2", price: "$2,064.89", marketCap: "$249,824,561,307" },
      { name: "Tether2", price: "$0.9986", marketCap: "$78,663,362,207" },
      { name: "USD Coin2", price: "$1.00", marketCap: "$50,503,234,574" },
      { name: "BNB2", price: "$295.25", marketCap: "$48,341,424,542" },
      { name: "XRP2", price: "$0.4248", marketCap: "$20,529,830,618" },
      { name: "Cardano2", price: "$0.5497", marketCap: "$18,818,248,515" },
      { name: "Binance USD2", price: "$1.00", marketCap: "$17,364,168,321" },
      { name: "Solana2", price: "$51.46", marketCap: "$17,337,608,684" },
      { name: "Dogecoin2", price: "$0.08981", marketCap: "$11,915,806,122" },
    ],
    hasNext: false,
  },
};
export default function CryptoPrices() {
  const [cryptoPrices, setCryptoPrices] = useState();
  const [error, setError] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(cryptoPricesData[pageIndex]);
      }, 1000);
    });

    promise
      .then((data) => {
        setCryptoPrices(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
    // fetch(CRYPTO_PRICES_API_BASE_URL?page_index=pageIndex)
    //   .then((data) => {
    //     setCryptoPrices(data);
    //   })
    //   .catch((e) => {
    //     setError(e);
    //   });
  }, [pageIndex]);

  const onPreviouse = () => {
    setPageIndex((prevIndex) => prevIndex - 1);
  };

  const onNext = () => {
    setPageIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      {error ? (
        "Some things went wrong!"
      ) : (
        <div className='crypto-prices-wrapper'>
          <table>
            <thead>
              <tr>
                <td>Coin</td>
                <td>Price</td>
                <td>Market Cap</td>
              </tr>
            </thead>
            <tbody>
              {cryptoPrices ? (
                <CryptoPricesRows data={cryptoPrices} />
              ) : (
                <span>Loading...</span>
              )}
            </tbody>
          </table>
          <div className='crypto-prices-buttons-wrapper'>
            <button
              onClick={onPreviouse}
              className='crypto-prices-button'
              disabled={pageIndex === 0 || isLoading}
            >
              Previous
            </button>
            <button
              onClick={onNext}
              className='crypto-prices-button'
              disabled={!cryptoPrices?.hasNext || isLoading}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
