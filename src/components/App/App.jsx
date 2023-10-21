import {Container} from "./App.styled";

import { Profile } from "components/Profile/Profile";
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
      <Profile users={users} />
      <Statistics data={data} title='Upload stats' />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </Container>
    
  );
};
