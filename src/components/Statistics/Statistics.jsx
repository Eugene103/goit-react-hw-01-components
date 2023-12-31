import { Section, Title, List, Item, Label, Percentage} from "./Statistics.styled";

export const Statistics = ({ data, title }) => {
    return (<Section>
        {title && <Title name={title}>{title}</Title>}
        <List>
            {data.map(({ id, label, percentage }) => (
                <Item key={id}>
        <Label>{ label}</Label>
        <Percentage>{ percentage}</Percentage>
    </Item>
 ))} </List></Section>)
}




