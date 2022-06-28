import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { Rnd } from 'react-rnd';
import { ItemTypes, Widgets } from '@/features/activityTool';

const DraggableBox = ({
  onClick,
  changeColor,
  openModal,
  boxModal,
  moveBox,
  creating,
  student,
  ...props
}) => {
  const { id, title, left, top, lock, type, shape, color, width, height } =
    props;

  const handleClick = (e) => {
    if (creating) {
      switch (e.detail) {
        case 2:
          openModal(props);
          break;
        default:
          return;
      }
    }
  };

  const getStyles = (left, top, isDragging) => {
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    return {
      position: 'absolute',
      transform,
      WebkitTransform: transform,
      opacity: isDragging ? 0 : 1,
      height: isDragging ? 0 : '',
    };
  };

  const [collect, drag, dragPreview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top, title, lock, type, shape, color, width, height },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title, width, height],
  );

  return (
    <>
      {id.length === 36 ? (
        type === 'box' ? (
          <div
            ref={collect.isDragging ? dragPreview : drag}
            onClick={() => {
              if (creating) {
                boxModal(props);
              }
            }}
          >
            <Widgets.Box title={title} lock={lock} student={student} />
          </div>
        ) : type === ItemTypes.IMAGE ? (
          <Rnd
            bounds="parent"
            default={{
              x: left,
              y: top,
              width: 100,
              height: 100,
            }}
          >
            <Widgets.Image src={shape} lock={lock} student={student} />
          </Rnd>
        ) : type === ItemTypes.SHAPE ? (
          <Rnd
            disableDragging={!creating && lock}
            enableResizing={creating}
            bounds="parent"
            onDragStop={(e, d) => {
              let tmp = { ...props };
              tmp.left = d.x;
              tmp.top = d.y;
              moveBox(tmp);
            }}
            lockAspectRatio
            default={{
              x: left,
              y: top,
              width: width ?? 50,
              height: height ?? 50,
            }}
            onResizeStop={(e, d, ref, delta) => {
              let tmp = { ...props };
              tmp.width = ref.offsetHeight;
              tmp.height = ref.offsetWidth;
              moveBox(tmp);
            }}
            onClick={handleClick}
          >
            {shape === 'Circle' ? (
              <Widgets.CircleShape
                color={color}
                lock={lock}
                student={student}
              />
            ) : shape === 'Square' ? (
              <Widgets.SquareShape
                color={color}
                lock={lock}
                student={student}
              />
            ) : shape === 'Star' ? (
              <Widgets.StarShape color={color} lock={lock} student={student} />
            ) : null}
          </Rnd>
        ) : null
      ) : (
        <div
          ref={collect.isDragging ? dragPreview : drag}
          style={getStyles(left, top, collect.isDragging)}
        >
          {type === 'box' ? (
            <Widgets.Box title={title} lock={lock} />
          ) : type === 'image' ? (
            <div style={{ width: '50px', height: '50px' }}>
              <Widgets.Image sx={{ width: '100px' }} src={shape} />
            </div>
          ) : (
            <div style={{ width: '50px', height: '50px' }}>
              {shape === 'Circle' ? (
                <Widgets.CircleShape color="#EEF1FA" />
              ) : shape === 'Square' ? (
                <Widgets.SquareShape color="#EEF1FA" />
              ) : shape === 'Star' ? (
                <Widgets.StarShape color="#EEF1FA" />
              ) : (
                <Widgets.VerticalTrait color="#EEF1FA" />
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

DraggableBox.propTypes = {
  moveBox: PropTypes.func,
  onClick: PropTypes.func,
  changeColor: PropTypes.func,
  openModal: PropTypes.func,
  boxModal: PropTypes.func,
  creating: PropTypes.bool,
};

DraggableBox.defaultProps = {
  creating: false,
};

export default DraggableBox;
