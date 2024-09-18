import { useState } from 'react';

interface CollapsibleDescriptionProps {
  description: string; // Explicitly typing the description prop
}

const CollapsibleDescription: React.FC<CollapsibleDescriptionProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="description-container">
      <p className={`description ${isExpanded ? 'expanded' : ''}`}>
        {description}
      </p>
      <button onClick={toggleDescription} className="toggle-button">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      <style jsx>{`
        .description-container {
          max-width: 600px;
        }

        .description {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4; /* Number of lines to show */
          overflow: hidden;
          text-overflow: ellipsis;
          transition: all 0.3s ease;
        }

        .description.expanded {
          display: block;
          -webkit-line-clamp: unset; /* Remove line clamping */
        }

        .toggle-button {
          display: block;
          margin-top: 10px;
          color: #585AB3;
          border: none;
          text-decoration: underline;
          cursor: pointer;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default CollapsibleDescription;
