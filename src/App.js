import "./App.css";
import Characters from "./components/characters";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default App;
