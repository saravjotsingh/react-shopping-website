import React,{Component} from "react";

class Carousel extends Component{
	render(){
		return(
			<div className="container carousel">
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>


    <div class="carousel-inner">
      <div className="item active">
        <img src="https://images.wallpaperscraft.com/image/zara_clothing_zara_man_black_and_white_98068_1280x720.jpg"  alt="Los Angeles"/>
      </div>

      <div className="item">
        <img src="https://images.wallpaperscraft.com/image/clothing_bright_lines_tubes_55294_1280x720.jpg"  alt="Chicago"/>
      </div>
    
      <div className="item">
        <img src="https://images.wallpaperscraft.com/image/clothing_rope_grass_colorful_66166_1280x720.jpg"   alt="New york"/>
      </div>
    </div>

    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

			);
	}
}

export default Carousel;
