import React from 'react';
import { makeStyles, Tab, Tabs } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import GroupIcon from '@material-ui/icons/Group';
import RepoList from 'components/Main/UserContainer/RepoList';
import TabPanel from './TabPanel/TabPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const UserTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="REPOSITORIES" icon={<CodeIcon />} {...a11yProps(0)} />
        <Tab label="FOLLOWERS" icon={<GroupIcon />} {...a11yProps(1)} />
        <Tab label="FOLLOWING" icon={<GroupIcon />} {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <RepoList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>Followers</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>Following</div>
      </TabPanel>
    </div>
  );
};

export default UserTabs;
