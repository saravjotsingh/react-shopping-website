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
},{
	name:"Denim jeans",
	price:5100,
	image:"data:image/jpeg;base64,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"
},{
	name:"Polo Jeans",
	price:3400,
	image:"data:image/jpeg;base64,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"
},{
	name:"Ralph Lauren",
	price:12000,
	image:"data:image/jpeg;base64,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"

},{
	name:"True Religion Jeans",
	price:28000,
	image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FUejH8vflwE-WbP4HkREyYSLS2-tBjO4Cj87f_MwtYvZlA5-"
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


    setTimeout(()=>{
    	this.open()
    },2000)
}


open=()=>{
	 $('.cart-header').css("width","0");
    $(".cart-button-close").css("display","none");
    $(".cart-button").css("display","block");
    
}

	render(){
		var cart = this.state.cart;
		console.log(cart.length)
		var data = datas.map((d,i)=>{
			return(<div key={i} className="col-sm-4" onMouseEnter={()=>this.addOption(i)} onMouseLeave={()=>this.addOption1(i)}>
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
				<h1 className="text-center">Things To Buy!</h1>
				<hr/>
				
				<div className="container text-center">
						{data}
				</div>
				<Cart cartData={cart} emptyCart={this.emptyCart}/>
				</div>
				
			);
	}
}

export default Item;