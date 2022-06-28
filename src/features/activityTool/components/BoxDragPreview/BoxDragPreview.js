import { useEffect, useState, memo } from 'react';

const styles = {
  display: 'inline-block',
  transform: 'rotate(-5deg)',
  WebkitTransform: 'rotate(-5deg)',
};

//Fonction faisant apparaitre l'item quand on bouge la souris
const BoxDragPreview = memo(function BoxDragPreview({ title }) {
  const [tickTock, setTickTock] = useState(false);
  useEffect(
    function subscribeToIntervalTick() {
      const interval = setInterval(() => setTickTock(!tickTock), 500);
      return () => clearInterval(interval);
    },
    [tickTock],
  );
  return (
    <div style={styles}>
      <Box title={title} yellow={!tickTock} preview />
    </div>
  );
});

export default BoxDragPreview;
