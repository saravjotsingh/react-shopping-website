import React,{Component} from 'react';
import $ from 'jquery'
class Cart extends Component{


  openDiv=()=>{
    if($(window).width()>400){
      $('.cart-header').css("width","30%");
    $(".cart-button").css("display","none");
    $(".cart-button-close").css("display","block");  
    }else{
      $('.cart-header').css("width","100%");
    $(".cart-button").css("display","none");
    $(".cart-button-close").css("display","block");
    }
    
    }
  
  closeDiv=()=>{
    $('.cart-header').css("width","0");
    $(".cart-button-close").css("display","none");
    $(".cart-button").css("display","block");
    
  }

  checkout=()=>{
    alert("Order Confirmed")
    this.props.emptyCart()
  }

  cancelItem=(i)=>{
    $(".cart-name"+i).css("text-decoration","line-through");
    $(".cart-price"+i).css("text-decoration","line-through");
  }



  cancelItem1=(i)=>{
    console.log("abbbcfff");
    $(".cart-name"+i).css("text-decoration","");
    $(".cart-price"+i).css("text-decoration","");
  }

  render(){
    var amount = 0
    if(this.props.cartData.length>0){
      var datas = this.props.cartData.map((data,i)=>{
      amount = amount + data.price
      return(
            <div className="row cart-info">
              <div className="col-sm-1" style={{pointer:"cursor"}} onClick={()=>this.props.deleteItem(i)} onMouseOut={()=>this.cancelItem1(i)} onMouseOver={()=>this.cancelItem(i)}>&times;</div>
              <div className="col-sm-3"><img  style={{height:'90px'}} src={data.image}/></div>
              <div className={"col-sm-3" + " " +"cart-name" + i + " "+ "cart-name"}>{data.name}</div>
              <div className={"col-sm-3" + " "+  "cart-price" + i + " " + "cart-price"}>₹{data.price}</div>
              
            </div>

          );
    })  
    }else{
      var datas = <div>Cart is Empty :)</div>
    }
    

    return(
          <div>
            <div className="cart-header">
            <div onClick={this.closeDiv} className="cart-button-close">&times;</div>
            <div className="text-center" style={{color:"white",fontSize:"30px"}}>Bag</div>
            <h1 className="text-center"><span class="glyphicon">&#xe116;<span className="cart-value">{this.props.cartData.length}</span></span></h1>
            <div onClick={this.openDiv} className="cart-button"><span class="glyphicon">&#xe116;<span className="cart-value">{this.props.cartData.length}</span></span></div>
            <div className="cart-data">
              {datas}
            </div>
            <div className="checkout">
              <div className="row">
              <div className="col-sm-8">Subtotal</div>
              <div className="col-sm-3 cart-pricee">₹{amount}</div>
              <button className="btn checkout-btn" onClick={this.checkout}>Checkout</button>
              </div>
            </div>

          </div>
          
          </div>
      );
  }
}

export default Cart;