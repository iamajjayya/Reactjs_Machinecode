import React, { useState } from 'react'

const AccordianData = [
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    {
      title: 'How can I post a job vacancy for free?',
      content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
    },
    // Add more FAQ items here...
  ];
  

const Faq = () => {
    const [activeIndex,  setActiveIndex] =  useState(null)
    const [showMore,  setShowmore] =  useState(false)

const toggleAccordian = (index) => {
setActiveIndex(activeIndex === index ? null : index );

}

const toggleShowmore = () => {
    setShowmore(!showMore);
}

const displayData  =  showMore ? AccordianData  : AccordianData.slice(0,5)
  return (
    <div>
      {
        displayData.map((item,index) => (
            <AccordionItem 
            key={index}
            title={item.title}
            content={item.content}
            isOpen={ activeIndex === index}
            onClick={() => toggleAccordian(index)}

            />
        ))
      }
      <button onClick={toggleShowmore}>
          {showMore ? "hide" : "View More"}
      </button>
    </div>
  )
}

export default Faq


const AccordionItem = ({title, content , isOpen , onClick}) => {


    return(
        <div>
            <button onClick={onClick}>{title}</button>
            { isOpen && (
                <div>
                 {content}
                </div>
            )}
        </div>
    )
}
