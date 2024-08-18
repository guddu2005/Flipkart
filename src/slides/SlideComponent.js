import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS file for styling

function SlideComponent() {
    return (
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000}>
        <div className='w-screen'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f929038b0dc644f0.jpg?q=20" alt="Image 1" />
        </div>
        <div className='w-screen'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/74b1a64b98702034.jpg?q=20" alt="Image 2" />
        </div>
        <div className='w-screen'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20" alt="Image 3" />
        </div>
        <div className='w-screen'>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/74b1a64b98702034.jpg?q=20' alt='image4'/>
        </div>
        <div className='w-screen'>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20' alt='image4'/>
        </div> <div>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20' alt='image4'/>
        </div > 
        <div className='w-screen'>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f929038b0dc644f0.jpg?q=20' alt='image4'/>
        </div>
        
      </Carousel>
    );
  }
  
  export default SlideComponent;
  