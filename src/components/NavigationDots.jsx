import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        { ['home' , 'about' ,  'work' , 'skills' , 'testimonials' , 'contact' ].map((item, i)=>(
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a 
              href={`#${item}`} 
              key={item+i}
              className="app__navigation-dot"
              style={active===item ? { background: '#313bac' } :  {}}
            /> 
        ))}
    </div>
  )
}

export default NavigationDots