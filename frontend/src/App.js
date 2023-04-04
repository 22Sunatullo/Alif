import { Modal } from "./components/Modal/Modal";
import { Table } from "./components/Table/Table";
import { Wrapper } from "./components/Wroper/Wraper";

function App() {
  return (
    <div>
      <Wrapper>
        <Modal />
        <Table />
      </Wrapper>
    </div>
  );
}

export default App;
