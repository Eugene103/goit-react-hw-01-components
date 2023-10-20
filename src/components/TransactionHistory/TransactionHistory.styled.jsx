import styled from "@emotion/styled";

export const HistoryTab = styled.table`
margin-top: 30px;
table-layout: fixed;
  width: 100%;
border-spacing: 1px;
	border-collapse: separate;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
`;
export const TabHead = styled.thead`
background-color: #7BB6B7;
color: white;
`;
export const HeadUnit = styled.th`
padding:10px;
`;
export const TabBody = styled.tbody`
text-align: center
`;
export const TabItem = styled.tr`
:nth-of-type(even){
    background-color:rgb(245,245,245);
}
`;
export const BodyUnit = styled.td`
padding:10px;

`;