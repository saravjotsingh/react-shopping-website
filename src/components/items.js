import React,{Component} from 'react';
import $ from 'jquery';
import Cart from './cart.js'
const images = ['https://images.usc.co.uk/images/products/42740802_3pl.jpg','https://i.pinimg.com/originals/d8/f3/8b/d8f38be29b1f574e5deec5267d14ae12.jpg',
'https://static.ajkerdeal.com/images/deals/01803120359/smallimage1.jpg','https://qph.fs.quoracdn.net/main-qimg-372eefa9e10f713e209af7b1f97aa154-c',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQv-8AjXLAHnIlQZIGXRQXqDJ6RV6kqrztQAmxk9VbxjVHBlS','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQv-8AjXLAHnIlQZIGXRQXqDJ6RV6kqrztQAmxk9VbxjVHBlS']

const datas = [
{
	name:"Abc",
	price:320,
	image:'https://images.usc.co.uk/images/products/42740802_3pl.jpg',
},{
	name:"Sphynx Tie Dye Grey T-Shirt",
	price:32,
	image:'https://i.pinimg.com/originals/d8/f3/8b/d8f38be29b1f574e5deec5267d14ae12.jpg'
},{
	name:"Born On The Streets",
	price:320,
	image:'https://static.ajkerdeal.com/images/deals/01803120359/smallimage1.jpg'
},{
	name:"Tso 3D Black T-Shirt",
	price:200,
	image:'https://qph.fs.quoracdn.net/main-qimg-372eefa9e10f713e209af7b1f97aa154-c'
},{
	name:"On The Streets Black T-Shirt",
	price:320,
	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQv-8AjXLAHnIlQZIGXRQXqDJ6RV6kqrztQAmxk9VbxjVHBlS'
}

]



class Item extends Component{

	state={
		cart:[],
		hello:0
	}

addOption=(i)=>{
        $(".span"+i).slideToggle("fast");
    
}

addOption1=(i)=>{
        $(".span"+i).slideToggle("fast");
    
}

emptyCart=()=>{
	this.setState({
		cart:[]
	})
	 $('.cart-header').css("width","0");
    $(".cart-button-close").css("display","none");
    $(".cart-button").css("display","block");
    

}

addToCart=(index)=>{
	var cartData  = this.state.cart;
	cartData.push(datas[index]);
	this.setState({
		cart:cartData,
	})
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

	render(){
		var cart = this.state.cart;
		console.log(cart.length)
		var data = datas.map((d,i)=>{
			return(		<div key={i} className="col-sm-4" onMouseEnter={()=>this.addOption(i)} onMouseLeave={()=>this.addOption1(i)}>
						<div className={'data-'+ i + " " + "hello"} >
						<span className={"tag" + " " + 'span'+i}><span className="cart-text" onClick={()=>this.addToCart(i)}>Add to Cart</span></span>
						<img src={d.image} className="item-images"/>
						</div>
						<p>{d.name}</p>
						<p> ₹{d.price}</p>
						</div>
				);
		})
		return(
				<div>
				<h1 className="text-center">Items</h1>
				<div className="container text-center">
						{data}
				
				</div>
				<Cart cartData={cart} emptyCart={this.emptyCart}/>
				</div>
				
			);
	}
}

export default Item;