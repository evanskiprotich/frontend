import React from 'react'
import Table from '../../Components/Table/Table'
import { TestDataCompany, testIncomeStatementData } from '../../Components/Table/testData';
import RatioList from '../../Components/RatioList/RatioList';
import { CompanyKeyMetrics } from '../../company';


type Props = {};
const data = TestDataCompany;

// const tableConfig = [
//   {
//     label: "symbol",
//     render: (company: any) => company.symbol,
//   },
// ];

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
    subTitle:
      "Measures the companies ability to pay short term debt obligations",
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
    subTitle:
      "Return on equity is the measure of a company's net income divided by its shareholder's equity",
  },
  {
    label: "Return On Assets",
    render: (company: CompanyKeyMetrics) => company.returnOnTangibleAssetsTTM,
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets",
  },
];

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>
        Design guide- This is the design guide for Fin Shark. These are reuable
        components of the app with brief instructions on how to use them.
      </h1>
     <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table config={tableConfig} data={data} />
      <h3>
        Table - Table takes in a configuration object and company data as
        params. Use the config to style your table.
      </h3>
    </>
  );
};

export default DesignGuide;