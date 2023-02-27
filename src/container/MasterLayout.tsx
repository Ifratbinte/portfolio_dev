import Header from "#/components/layout/header/Header";
import Head from "#container/Head";

interface Props {
  children: JSX.Element | JSX.Element[];
}
const MasterLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      {children}
    </>
  );
};

export default MasterLayout;
