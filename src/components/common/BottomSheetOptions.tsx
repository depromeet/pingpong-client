import styled from 'styled-components';

interface Option {
  id: number;
  label: string;
}

const BottomSheetOptions = ({ list }: { list: Option[] }) => {
  return (
    <OptionList>
      {list.map((item) => (
        <OptionItem key={item.id}>{item.label}</OptionItem>
      ))}
    </OptionList>
  );
};

export default BottomSheetOptions;

const OptionList = styled.ul`
  margin-bottom: 2rem;
`;

const OptionItem = styled.li`
  padding: 1.2rem 3rem;
  border-bottom: 0.1rem solid blue;
`;
