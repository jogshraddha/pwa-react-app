import React from 'react';
import Details from './Details';
import ReportContainer from './ReportContainer';

class ExpenseContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedExpenseDetails: '',
      enteredAmount: 0,
      expenseRecords: []
    };

    // This binding is necessary to make `this` work in the callback
    this.addExpenses = this.addExpenses.bind(this);
    this.handleSelectedDetails = this.handleSelectedDetails.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
  }

  handleSelectedDetails(e) {
    this.setState({ selectedExpenseDetails: e.label });
  }

  onAmountChange(e) {
    this.setState({ enteredAmount: e.target.value});
  }

  addExpenses() {
    console.log('Clicked', this.state);
    var records = this.state.expenseRecords;
    var date = new Date().toString();
    var newEntry = {
      id:records.length + 1,
      date: date,
      details: this.state.selectedExpenseDetails,
      amount: this.state.enteredAmount
    }
    records.push(newEntry);
    // console.log(records);
    this.setState({expenseRecords: records});
    document.getElementById('totalAmount').value = '';
  }

  render() {
    return <div id="expenseContainer">
      <div id="entryContainer" className="container text-center">
      <div className="row">
        <div className="col"><Details handleSelectedDetails={this.handleSelectedDetails}/></div>
        <div className="col">
          <div className="form-group">
            <input type="number" onChange={this.onAmountChange} className="form-control" id="totalAmount" aria-describedby="amount" placeholder="Enter amount"/>
          </div>
        </div>
        <div className="col"><button type="button" onClick={this.addExpenses} className="btn btn-primary">Add</button></div>
      </div>
      </div>
      <br/>
      <ReportContainer expenseRecords={this.state.expenseRecords}/>
    </div>
  }
}

export default ExpenseContainer;