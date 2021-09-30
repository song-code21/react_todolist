import TodoContainer from "./coponents/TodoContainer";
import './App.css';
import styled from "styled-components";

const AppContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Hi Melody";
  color: #343a40;
`

function App() {
  return (
    <div className="App">
      <AppContainer>
        <TodoContainer />
      </AppContainer>
    </div>
  );
}

export default App;
