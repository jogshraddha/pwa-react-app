import React from 'react';
// import Details from './Details';

class ReportContainer extends React.Component {

  render() {
    return <div id="reportContainer" className="container text-center">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Date</th>
          <th scope="col">Details</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
         {this.props.expenseRecords.map(item => {
          return (
            <tr key={item.id}>
              <td>{ item.id }</td>
              <td>{ item.date }</td>
              <td>{ item.details }</td>
              <td>{ item.amount }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  }
}

export default ReportContainer;