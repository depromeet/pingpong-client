import NavigationBarList from './NavigationBarList';

const NavigationBar = () => {
  return (
    <nav className="w-[375px]">
      <ul className="flex w-full justify-evenly">
        <NavigationBarList />
      </ul>
    </nav>
  );
};

export default NavigationBar;
