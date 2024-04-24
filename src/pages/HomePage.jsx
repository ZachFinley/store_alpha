import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomePage.css';

function HomePage() {
  const items = [
    {
      imageUrl: 'https://th.bing.com/th/id/R.72ff798ea0192ec8e470be79aef6b3c1?rik=gsM50%2fZdU4g%2fsg&riu=http%3a%2f%2fmedia.timeout.com%2fimages%2f102837656%2fimage.jpg&ehk=RT%2fYnzmaS4UDrY6Xtf%2fmtjfUbvHNfiH2vXGlrwNrEyI%3d&risl=&pid=ImgRaw&r=0',
      caption: 'Delicious Fruit',
      overlayText: 'Fruits and Vegtables',
      additionalText: 'Welcome to our Grocery Store!',
    },
    {
      imageUrl: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/costco-rotisserie-chicken-shelves.jpg?quality=82&strip=1',
      caption: 'Cooked Food',
      overlayText: 'Rotisserie Chicken',
      additionalText: 'Only $4.99!',
    },
    {
      imageUrl: 'https://www.shopfood.com/wp-content/uploads/2023/08/best-store-bought-ice-cream-1200x800-main.jpg',
      caption: 'Ice Cream',
      overlayText: 'Various Flavors for all to Enjoy',
      additionalText: 'New Flavors every week!',
    },
  ];

  return (
    <div className="HomePage">
      <Carousel className="w-100">
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.imageUrl}
              alt={`Slide ${index + 1}`}
            />
            <div className="text-white position-absolute top-0 start-0 p-3" style={{ marginTop: '30px' }}>
              <h3>{item.additionalText}</h3>
            </div>
            <Carousel.Caption className="text-custom">
              <h3>{item.caption}</h3>
              <p>{item.overlayText}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomePage;
