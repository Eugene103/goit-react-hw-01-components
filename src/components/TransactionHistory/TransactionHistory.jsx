import {HistoryTab, TabHead, TabBody, HeadUnit, BodyUnit, TabItem } from "./TransactionHistory.styled";

export const TransactionHistory = ({transactions}) => {  
    return (<HistoryTab>
        <TabHead>
            <tr>
            <HeadUnit>Type</HeadUnit>
            <HeadUnit>Amount</HeadUnit>
            <HeadUnit>Currency</HeadUnit>
            </tr>
        </TabHead>
        <TabBody>
        {transactions.map(({amount, currency, id, type }) => (
    <TabItem key={id}>
                <BodyUnit>{type}</BodyUnit>
                <BodyUnit>{amount}</BodyUnit>
                <BodyUnit>{currency}</BodyUnit>
    </TabItem>
        ))}
            </TabBody></HistoryTab>)
}