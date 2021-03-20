import React, { Component, Fragment } from 'react';
import '../pages/product/Product.css';
import Counter from './Counter';



class CartProduct extends Component {
    // state = {
    //     order:0,
    //     name: 'bambang'
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     // alert(this.state.order)
    //    this.setState({
    //         order: this.state.order + 1    
    //     }, () => {
    //         this.handleCounterChange(this.state.order)

    //     })
    //     // console.log(dara);
    //     // this.handleCounterChange(this.state.order)
    //     // this.setState(this.state.order+1);
    // }

    // handleMinus = () => {
    //     if(this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         },  () => {
    //             this.handleCounterChange(this.state.order)
    
    //         })
    //     }
    // }

    render() {
        return (
            <Fragment>
            <div className="card">
                <div className="img-thumb-prod">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cmH04HRcmgaTEaF3-vEz4V7qLXcpzB9TjA&usqp=CAU" alt="" />
                </div>
                <p className="product-title"> Daging Ayam</p>
                <p className="product-price">45000</p>
                {/* <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>

                </div> */}
            </div>
            <Counter onCounterChange={(value) => this.props.onCounterChange(value)} />
            </Fragment>
        )
    }
}

export default CartProduct;
