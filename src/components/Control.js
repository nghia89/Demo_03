import React,{Component} from 'react'
import Search from './Search';
import Sort from './Sort'

class Control extends Component{
	render(){
		return(
			<div>
				<Search onSearch={this.props.onSearch}/>
	            <Sort 
	            onSort={this.props.onSort}
	            sortBy={this.props.SortBy}
	            sortValue={this.props.SortValue}
	            />  
	             </div>  
			);
	}
}
export default Control;