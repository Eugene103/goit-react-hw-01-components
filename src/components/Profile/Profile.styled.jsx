import styled from "@emotion/styled";

export const Board = styled.div`
 display: flex;
  gap: 30px;
  background-color: rgb(239, 237, 237);
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 15px;
`;

export const Conteiner = styled.div`
padding: 20px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;
export const Description = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Avatar = styled.img`
width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const Name = styled.p`
margin-top: 30px;
`;
export const Tag = styled.p`
margin-top: 10px;
`;
export const Location = styled.p`
margin-top: 10px;
`;
export const Stats = styled.ul`
margin-top: 30px;
  display: flex;
  background-color: rgb(234, 234, 234);
  gap: 30px;
`;
export const Label = styled.li`
 display: flex;
  flex-direction: column;
  align-items: center;
`;

