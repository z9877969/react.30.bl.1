import { Component } from "react";
import MainPage from "../pages/MainPage";
import TransactionPage from "../pages/TransactionPage";
import "./App.css";

class App extends Component {
  state = {
    currentTransaction: "",
  };

  handleOpenTransaction = (transType) => {
    this.setState({ currentTransaction: transType });
  };

  handleCloseTransaction = () => {
    this.setState({ currentTransaction: "" });
  };

  render() {
    const { currentTransaction } = this.state;
    return (
      <>
        <h1>App</h1>
        {!currentTransaction ? (
          <MainPage handleOpenTransaction={this.handleOpenTransaction} />
        ) : (
          <TransactionPage
            transType={currentTransaction}
            handleCloseTransaction={this.handleCloseTransaction}
          />
        )}
      </>
    );
  }
}

export default App;
