import React from 'react';
import Select from 'react-select';


const options = [
  { value: 'grocery', label: 'Grocery' },
  { value: 'fNv', label: 'Fruits and Vegitables' },
  { value: 'med', label: 'Medicine' },
  { value: 'travel', label: 'Travel and Transporation' },
  { value: 'reacharge', label: 'Bills and recharge' },
  { value: 'laundry', label: 'Laundry' },
  { value: 'clothes', label: 'Clothes' },
  { value: 'hotelling', label: 'Outside Food' },
  { value: 'gifts', label: 'Gifts' },
  { value: 'other', label: 'Other' }
]

class Details extends React.Component {
  render() {
    return <Select onChange={this.props.handleSelectedDetails} options={options} />
  }
}

export default Details;