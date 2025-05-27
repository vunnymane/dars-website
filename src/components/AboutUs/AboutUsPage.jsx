import React, { useState, useEffect } from 'react';
import BookScene from '../Book/Book3D';
import './AboutUs.css';

const bookContent = {
  pages: [
    {
      left: {
        title: "Welcome to Dars Initiative",
        text: "Step into our story, where education meets opportunity. We are a community-driven organization dedicated to transforming lives through knowledge and empowerment."
      },
      right: {
        title: "Our Beginning",
        text: "Founded with a vision to bridge educational gaps, Dars Initiative has grown from a small community project into a beacon of hope for many.",
        image: "https://placehold.co/600x400/F4E4BC/1A0F0A?text=Dars+Initiative"
      }
    },
    {
      left: {
        title: "Our Mission",
        text: "To provide quality education and create opportunities for those who need it most. We believe in the power of knowledge to transform communities."
      },
      right: {
        title: "Making Impact",
        text: "Through our various programs and initiatives, we've touched countless lives and continue to expand our reach.",
        image: "https://placehold.co/600x400/F4E4BC/1A0F0A?text=Our+Impact"
      }
    },
    {
      left: {
        title: "Our Vision",
        text: "A world where every individual has access to quality education and the opportunity to reach their full potential."
      },
      right: {
        title: "Future Goals",
        text: "We aim to expand our programs, reach more communities, and create lasting change through education.",
        image: "https://placehold.co/600x400/F4E4BC/1A0F0A?text=Future+Goals"
      }
    },
    {
      left: {
        title: "Our Values",
        text: "Integrity, Excellence, Community, and Innovation guide everything we do at Dars Initiative."
      },
      right: {
        title: "Join Us",
        text: "Be part of our journey in making education accessible to all.",
        image: "https://placehold.co/600x400/F4E4BC/1A0F0A?text=Join+Us"
      }
    },
    {
      left: {
        title: "Thank You",
        text: "Thank you for taking the time to learn about our story. Together, we can make a difference."
      },
      right: {
        title: "Get Involved",
        text: "Visit our website to learn more about how you can support our mission.",
        image: "https://placehold.co/600x400/F4E4BC/1A0F0A?text=Get+Involved"
      }
    }
  ]
};

const AboutUsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [background, setBackground] = useState('#F5E6B5');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < bookContent.pages.length) {
      setCurrentPage(newPage);
      setBackground(getBackgroundColor(newPage));
    }
  };

  const getBackgroundColor = (page) => {
    // Simple gradient of colors for each page
    const colors = ['#F5E6B5', '#F4E4BC', '#F2E0B8', '#F0DCB4', '#EED8B0'];
    return colors[page] || colors[0];
  };

  return (
    <div className="about-us-container" style={{ background }}>
      <BookScene
        isOpen={isOpen}
        onOpen={handleOpen}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {!isOpen && (
        <div className="interaction-hint">
          Click the book to begin your journey
        </div>
      )}
    </div>
  );
};

export default AboutUsPage; 