import styled from "styled-components";
import FrameworkSelect from "./Components/FrameworkSelect";
import KnowhowPaperBox from "./Components/PaperBox/Interface/KnowhowPaperBox";
import "./init.css";

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 30px;

  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppBox>
      <FrameworkSelect />
      <KnowhowPaperBox />
    </AppBox>
  );
}

export default App;
