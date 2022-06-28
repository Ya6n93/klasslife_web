import { useDrop } from 'react-dnd';
import { ItemTypes, DraggableBox } from '@/features/activityTool';
import { snapToGrid as doSnapToGrid } from './snapToGrid';
import { Paper } from '@mui/material';
import useStore from '@/store/useStore';

const Container = ({
  snapToGrid,
  boxes,
  moveBox,
  onClick,
  changeColor,
  openModal,
  boxModal,
  creating,
  student,
}) => {
  const darkTheme = useStore((state) => state.darkTheme);

  const styles = {
    height: '648px',
    width: '993px',
    position: 'relative',
    backgroundColor: darkTheme ? '#2b2b2b' : 'white',
  };

  const [, drop] = useDrop(
    () => ({
      accept: [ItemTypes.BOX, ItemTypes.SHAPE, ItemTypes.IMAGE],
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        let left = Math.round(item.left + delta.x) - 425;
        let top = Math.round(item.top + delta.y);
        if (snapToGrid) {
          [left, top] = doSnapToGrid(left, top);
        }
        moveBox({
          id: item.id,
          left: left,
          top: top,
          lock: false,
          title: item.title,
          type: item.type,
          shape: item?.shape,
          color: item?.color,
          width: item?.width,
          height: item?.height,
        });
        return undefined;
      },
    }),
    [moveBox],
  );

  //Return permettant d'afficher les items dans le container
  return (
    <Paper ref={drop} style={styles} elevation={6}>
      {boxes.map((box) => (
        <DraggableBox
          key={box.id}
          id={box.id}
          {...box}
          onClick={onClick}
          changeColor={changeColor}
          openModal={openModal}
          boxModal={boxModal}
          moveBox={moveBox}
          creating={creating}
          student={student}
        />
      ))}
    </Paper>
  );
};

export default Container;
