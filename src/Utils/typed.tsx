import React from "react";
//@ts-ignore
import Typed from "typed.js";

export const TypedReactHooksDemo = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'I am a <i>full-stack</i> developer',
        'who likes playing <i>football soccer</i> and <i> fishing </i>',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop : true,
      cursorChar: '|',
    };

    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      //@ts-ignore
      typed.current && typed.current.destroy();
    }
  }, [])

  return (
      <div className="type-wrap relative z-10 sm:mx-0 mx-5 mt-3 sm:mt-0 pl-0 sm:pl-1 dark:text-white">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
  );
}


export const TitleTyped = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'welcome to the ... ',
        'portfolio page ...',
        'Erlangga Hidayatullah',
      ],
      startDelay : 0,
      typeSpeed: 50,
      backSpeed: 50,
      loop : false,
      cursorChar: '_',
    };

    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      //@ts-ignore
      typed.current && typed.current.destroy();
    }
  }, [])

  return (
      <title className="type-wrap relative z-10 sm:mx-0 mx-7 pl-0 sm:pl-1 dark:text-bg-base" ref={el}>
        
      </title>
  );
}

export const ErrorServer = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
       'sorry there was an </br> error on our <i>server</i> </br> please reload this page.'
       
      ],
      startDelay : 0,
      typeSpeed: 50,
      backSpeed: 50,
      loop : false,
      cursorChar: '',
    };

    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      //@ts-ignore
      typed.current && typed.current.destroy();
    }
  }, [])

  return (
      <p className="type-wrap relative z-10 sm:mx-0 mx-7 pl-0 sm:pl-1 dark:text-bg-base" ref={el}>
        
      </p>
  );
}

