import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const [name, setName] = useState(""); //코인종류 이름세팅
  const [myMoney, setMyMoney] = useState(0); //내가 입력하는 값
  const [coinPrice, setCoinPrice] = useState(0); //선택한 코인 가역
  const [trans, setTrans] = useState(0);

  const onChange = (e) => {
    const str = e.target.value; //select를 통해 배열로 받아온 값
    const coinArr = str.split(","); //첫번째요소:가격, 두번쨰요소:symbol
    const price = coinArr[0];
    const symbol = coinArr[1];

    setCoinPrice(price); //코인가격
    setName(symbol); //코인명 세팅

    if (myMoney > 0) setTrans((myMoney / price).toFixed(3));
  };
  const transCurrency = (e) => {
    setMyMoney(e.target.value);

    if (coinPrice > 0) setTrans((myMoney / coinPrice).toFixed(3));
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        // console.(json);
      });
  }, []); //처음로딩시 한번만 동작
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChange}>
            <option>선택하세요.</option>
            {coins.map((coin, index) => (
              //옵션 값2개를 가격, symbol 배열로 받음
              <option key={index} value={[coin.quotes.USD.price, coin.symbol]}>
                {coin.name} ({coin.symbol}) : {Math.round(coin.quotes.USD.price * 10) / 10}USD
              </option>
            ))}
          </select>
          <hr />
          <input value={myMoney} onChange={transCurrency} type="text" placeholder="Put your budget!" /> USD <br />
          <input value={trans} type="number" placeholder="Here you can change " disabled={true} /> {name}
        </div>
      )}
    </div>
  );
}

export default App;
