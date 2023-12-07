import { useState } from 'react'
import useCurrencyType from './hooks/useCurrencyType'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount]=useState(0);

  const currencyType= useCurrencyType(from);
  const options=Object.keys(currencyType)

  const convert=()=>{
    setConvertedAmount(amount * currencyType[to]);
  }

  const swap =()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2015/09/15/15/53/bank-notes-941246_1280.jpg")`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-8 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={(from) => setFrom(from)}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={(to) => setTo(to)}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
