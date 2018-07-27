import React,{Component} from 'react';


class Footer extends Component{
	render(){
		return(
			<div>
             	<div class="col-md-12 text-center footer">
                    <ul class="social-network social-circle">
                        <li><a href="#" class="icoRss" title="Rss"><i class="fa fa-rss"></i></a></li>
                        <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                        
                    </ul>	
                    <p style={{color:"white"}}>Made By : Saravjot Singh</p>			
				</div>


			</div>
			);
	}
}


export default Footer