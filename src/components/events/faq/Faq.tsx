import React from 'react';
import './Faq.css';
import FaqAccordion from './faq-accordion/FaqAccordion';

const Faq: React.FC = () => {
    const accordionData = [
        {
          title: '1. First topic heading will be placed here.',
          content: `A. The answer of this question will be here. The answer of this question will reside here. The answer of this question will reside here. The answer of this question will reside here. The answer of this question will reside here.`
        },
        {
            title: '2. First topic heading will be placed here.',
            content: `A. The answer of this question will be here. The answer of this question will reside here. The answer of this question will reside here. The answer of this question will reside here. The answer of this question will reside here.`
          },
          {
            title: '3. First topic heading will be placed here.',
            content: `A. The answer of this question will be here. The answer of this question will reside here. The answer of this question will reside here. The answer of this question will reside here. The answer of this question will reside here.`
          }
      ];
    return (
        <div className="faq">
            <div className="faq-headings">
                <div className="faq-head1">
                    <p>Frequently Asked Questions</p>
                </div>
            </div>
            <div className="faq-accordion">
        {accordionData.map(({ title, content }) => (
          <FaqAccordion title="1. First question will have its place here?" content="A. The answer of this question will reside here. The answer of this question will reside here. The answer of this question will reside here. The answer of this question will reside here. The answer of this question will reside here. The answer of this question will reside here."/>
        ))}
      </div>
        </div>
    );
}
export default Faq