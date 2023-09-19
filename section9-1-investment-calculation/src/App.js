
import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Table from './components/Table';

function App() {

  const [yearlyCalData, setYearlyCalData] = useState(null); // per-year results

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    setYearlyCalData(userInput);
  };

  const yearlyData = []; // per-year results

  if (yearlyCalData) {
    let currentSavings = +yearlyCalData['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +yearlyCalData['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +yearlyCalData['expected-return'] / 100;
    const duration = +yearlyCalData['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <Form onReceiveInvestmentData={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!yearlyCalData ?
        <p style={{ textAlign: 'center' }}>No data is available</p>
        :
        <Table displayData={yearlyData} initialInvestment={yearlyCalData['current-savings']} />
      }
    </div>
  );
}

export default App;
