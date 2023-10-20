import {ProfileBoard} from 'components/ProfileBoard/ProfileBoard'
import  users  from "../user.json";

export const App = () => {
  return (
    <div>
      <ProfileBoard users={ users} />
    </div>
  );
};
