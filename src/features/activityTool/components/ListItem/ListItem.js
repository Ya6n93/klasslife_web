import { useState } from 'react';
import { Box, Paper, Tabs } from '@mui/material';
import { ItemTypes } from '@/features/activityTool';
import { DraggableBox } from '@/features/activityTool';
import useStore from '@/store/useStore';
import modeles from '@/assets/imgs/modeles.png';
import modelesDark from '@/assets/imgs/modeles-dark.png';
import elements from '@/assets/imgs/elements.png';
import elementsDark from '@/assets/imgs/elements-dark.png';
import importer from '@/assets/imgs/importer.png';
import importerDark from '@/assets/imgs/importer-dark.png';
import points from '@/assets/imgs/points.png';
import pointsDark from '@/assets/imgs/points-dark.png';
import texte from '@/assets/imgs/texte.png';
import texteDark from '@/assets/imgs/texte-dark.png';
import TabItem from './TabItem';
import { TabContext, TabPanel } from '@mui/lab';

const ListItem = () => {
  const darkTheme = useStore((state) => state.darkTheme);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    height: '600px',
    width: '250px',
    position: 'relative',
    backgroundColor: darkTheme ? '#212121' : 'white',
    transform: 'translate(-50px, -25px)',
    borderRadius: '10px',
  };

  const [listeItemText] = useState({
    1: {
      title: 'Texte',
      left: 10,
      top: 0,
      lock: false,
      type: ItemTypes.BOX,
    },
  });

  const [listeItemModeles] = useState({
    6: {
      left: 10,
      top: 100,
      type: ItemTypes.IMAGE,
      shape:
        'https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg',
    },
  });

  const [listItem] = useState({
    2: {
      shape: 'Star',
      color: '#EEF1FA',
      left: 10,
      top: 10,
      lock: false,
      type: ItemTypes.SHAPE,
    },
    3: {
      shape: 'Circle',
      color: '#EEF1FA',
      left: 75,
      top: 150,
      lock: false,
      type: ItemTypes.SHAPE,
    },
    4: {
      shape: 'Square',
      color: '#EEF1FA',
      left: 140,
      top: 10,
      lock: false,
      type: ItemTypes.SHAPE,
    },
    5: {
      shape: 'VerticalTrait',
      color: '#EEF1FA',
      left: 150,
      top: 100,
      lock: false,
      type: ItemTypes.SHAPE,
    },
  });

  return (
    <Box display="flex">
      <TabContext value={value}>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            bgcolor: 'primary.main',
            height: '500px',
            borderRadius: '10px',
            width: '140px',
          }}
        >
          <Tabs orientation="vertical" value={value} onChange={handleChange}>
            <TabItem
              choose={value}
              logo={modeles}
              logodark={modelesDark}
              label="modeles"
              index={0}
              dark={darkTheme.toString()}
            />
            <TabItem
              choose={value}
              logo={elements}
              logodark={elementsDark}
              label="elements"
              index={1}
              dark={darkTheme.toString()}
            />
            <TabItem
              choose={value}
              logo={texte}
              logodark={texteDark}
              label="texte"
              index={2}
              dark={darkTheme.toString()}
            />
            <TabItem
              choose={value}
              logo={importer}
              logodark={importerDark}
              label="importer"
              index={3}
              dark={darkTheme.toString()}
            />
            <TabItem
              choose={value}
              logo={points}
              logodark={pointsDark}
              label="plus"
              index={4}
              dark={darkTheme.toString()}
            />
          </Tabs>
        </Box>
        <TabPanel value={0} index={0}>
          <Paper style={styles} elevation={6}>
            {Object.keys(listeItemModeles).map((key) => (
              <DraggableBox key={key} id={key} {...listeItemModeles[key]} />
            ))}
          </Paper>
        </TabPanel>
        <TabPanel value={1} index={1}>
          <Paper style={styles} elevation={6}>
            {Object.keys(listItem).map((key) => (
              <DraggableBox key={key} id={key} {...listItem[key]} />
            ))}
          </Paper>
        </TabPanel>
        <TabPanel value={2} index={2}>
          <Paper style={styles} elevation={6}>
            {Object.keys(listeItemText).map((key) => (
              <DraggableBox key={key} id={key} {...listeItemText[key]} />
            ))}
          </Paper>
        </TabPanel>
        <TabPanel value={3} index={3}>
          <Paper style={styles} elevation={6}>
            Importation
          </Paper>
        </TabPanel>
        <TabPanel value={4} index={4}>
          <Paper style={styles} elevation={6}>
            Coming soon
          </Paper>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ListItem;
