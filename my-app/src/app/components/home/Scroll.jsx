import ScrollComponent from '../gsap/Scrollcomponent';
  
export default function Scroll({ texts, velocity, className, numCopies }) {
  return (
    <ScrollComponent
      texts={texts} 
      velocity={velocity} 
      className={className}
      numCopies={numCopies}
    />
  );
}