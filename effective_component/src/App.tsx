import styled from "styled-components";
import FrameworkSelect from "./Components/FrameworkSelect";

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppBox>
      <FrameworkSelect />
    </AppBox>
  );
}

export default App;
