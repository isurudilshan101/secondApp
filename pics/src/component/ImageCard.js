import React from 'react';

 class ImageCard extends React.Component{
     render(){
         return(
         <div>
             <img
             alt={this.props.images.description}
             src={this.props.images.urls.regular}
             />
         </div>
         );
     }
     
 }

 export default ImageCard;