import styled from "@emotion/styled";

export const List = styled.ul`
margin-top: 15px;
`;
export const Item = styled.li`
 display: flex;
 align-items: center;
 box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
 width:200px;
 padding: 5px;
 :not(:first-of-type){
  margin-top: 15px;
}
`;

const setColorStatus = props => {
    if (props.online === true) {
        return 'green'
    } else {
        return 'red'
    }
};

export const Status = styled.span`
color: ${setColorStatus}
`;

export const Avatar = styled.img`
margin-left:10px;
`;
export const Name = styled.p`
margin-left:10px;
`
   