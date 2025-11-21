import React from 'react'

const About = () => {
  return (
    <div className='px-44'>
      <p className='text-4xl font-bold text-center underline mt-4'>About BloodLink</p>
      <br /><p className='text-xl'>Blood donation plays a significant role in saving the lives of many people worldwide. However, 
the traditional methods of blood bank management are time-consuming and prone to errors. To 
address this issue, we have developed a web application for blood bank management that can 
help blood banks efficiently manage their blood inventory, donor registration, and blood 
distribution. The web application allows the blood bank to manage the entire blood donation 
process, from donor registration to blood collection. The web application is also designed to 
improve the communication between the blood bank and donors in future.
</p>
      <br /><p className='text-xl'></p>
      <p className='text-right text-5xl'>
        <br />
        <a target="_blank" href="#" className='hover:drop-shadow-md hover:text-purple'><i class="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;
        <a target="_blank" href="www.linkedin.com/in/sonu9967" className='hover:drop-shadow-md hover:text-metal'><i class="fa-brands fa-linkedin"></i> </a>&nbsp;&nbsp;
      </p>
    </div>
  )
}

export default About