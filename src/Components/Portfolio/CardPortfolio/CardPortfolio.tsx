import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface Props {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string
}

const CardPortfolio = ({ onPortfolioDelete, portfolioValue}: Props) => {
  return (
    <>
        <h4>{portfolioValue}</h4>
        <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <p className="pt-6 text-xl font-bold">{portfolioValue}</p>
      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
    </>
  )
}

export default CardPortfolio