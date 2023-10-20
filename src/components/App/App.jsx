import {Container} from "./App.styled";

import { ProfileBoard } from 'components/ProfileBoard/ProfileBoard'
import users from "Arrays/user.json";

import { Statistics } from "components/Statistics/Statistics";
import data from "Arrays/data.json";

import { FriendList } from "components/FriendList/FriendList";
import friends from "Arrays/friends.json";

import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import  transactions  from "Arrays/transactions.json";

export const App = () => {
  return (
    <Container>
      <ProfileBoard users={users} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </Container>
    
  );
};
