import '../style-testimonials.css';
import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "This product completely changed the way I work. It's intuitive, fast, and reliable.",
      author: 'Alex Morgan'
    },
    {
      quote:
        "I can't imagine going back to the old way. The support team was phenomenal!",
      author: 'Jamie Lee'
    },
    {
      quote:
        "A game-changer for our business. We've seen a 40% increase in efficiency.",
      author: 'Taylor Brooks'
    },
    {
      quote:
        'Simple to use and incredibly powerful. Highly recommended for teams of any size.',
      author: 'Jordan Kim'
    },
    {
      quote:
        'The attention to detail and user experience is unmatched. Truly impressive.',
      author: 'Casey Nguyen'
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
