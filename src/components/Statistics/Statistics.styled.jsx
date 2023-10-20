import styled from "@emotion/styled";

export const Section = styled.section`
 text-align: center;
  margin-top: 30px;
  background-color: rgb(239, 237, 237);
  padding: 15px;
`;
export const Title = styled.h2`
background-color: rgb(255, 255, 255);
  width: 245px;
  margin-left: auto;
  margin-right: auto;
`;
export const List = styled.ul`
 display: flex;
  width: 245px;

  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return `rgb(${x},${y},${z})`
    }
export const Item = styled.li`
  display: flex;
  padding: 10px;

  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: ${random_bg_color};
`;
export const Label = styled.span`
font-size: 15px;
`;
export const Percentage = styled.span`
  font-size: 20px;`;

