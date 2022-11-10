import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "config/firebase";
// import EditIcon from '@mui/icons-material/Edit';
// import IconButton from '@mui/material/IconButton';
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "shared/containers/SidebarOption";
import MessageIcon from '@mui/icons-material/Message';
import {collection, query, onSnapshot, where} from "firebase/firestore";
import {DATABASE_NAME} from "config/firestore.constant";
import ProfileUpdateDialog from "shared/components/ProfileUpdateDialog";
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import TitleIcon from '@mui/icons-material/Title';
const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [channels, setChannels] = useState([]);
  const [userData, setUserData] = useState(null)
  const [users, setUsers] = useState([]);

  const getUserDetail = () => {
    const userNew = auth.currentUser;
    setUserData({...userNew})
  }
  useEffect(() => {
    const q = query(collection(db, DATABASE_NAME.CHANNELS));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let arr = [];
      snapshot.docs.forEach(doc => {
        arr.push({
          id: doc.id,
          name: doc.data().name
        });
      });

      setChannels(arr);

    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, DATABASE_NAME.USERS), where("active", "==", true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let arr = [];
      snapshot.forEach(doc => {
        arr.push({
          id: doc.id,
          ...doc.data()
        });
      });

      setUsers(arr);

    });

    return () => unsubscribe();
  }, [])

  useEffect(() => {
    setUserData(user)
  }, [user])

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Viet Uc Frontend</h2>
          <h3>
            <FiberManualRecordIcon color={"success"}/>
            {userData?.displayName}

            <ProfileUpdateDialog getUserDetail={getUserDetail}/>
          </h3> 
          


        </SidebarInfo>
        {/*refs: https://mui.com/material-ui/api/icon/*/}
        {/* <IconButton sx={{color: "#fff"}} aria-label="delete" size="small">
          <EditIcon fontSize="inherit" />
        </IconButton> */}
      </SidebarHeader>

      <SidebarOption Icon={TitleIcon} title={"Threads"} />
      {/* <SidebarOption Icon={MessageIcon} title={"Mentions & reactions"} /> */}
      <SidebarOption Icon={MessageIcon} title={"Channel browser"} />
      <SidebarOption Icon={Diversity3Icon} title={"People and user groups"} />
      {/* <SidebarOption Icon={MessageIcon} title={"Apps"} /> */}
      {/* <SidebarOption Icon={MessageIcon} title={"file browser"} /> */}
      <SidebarOption Icon={ExpandLessIcon} title={"Show less"} />

      <hr/>

      <SidebarOption Icon={DashboardIcon} title={"Channels"}/>

      {channels.map(channel => {
        return (
          <SidebarOption channel={channel} key={channel.id} Icon={MessageIcon} title={channel.name} type={"channel"}/>
        );
      })}

      <SidebarOption Icon={AddIcon} title={"Add Channel"} addChannelOption/>


      <hr/>
      <SidebarOption Icon={PeopleIcon} title={"Members"}/>
      {users.map(userActive => {
        return (
          <SidebarOption userData={userActive} key={userActive.uid}  type={"user"}/>
        );
      })}


    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: #fff;
  max-width: 260px;
  margin-top: 60px;
  border-top: 1px solid darkred;
`

const SidebarHeader = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid #d6d6d7;
`

const SidebarInfo = styled.div`
  
  flex: 1;
  > h2 {
    font-size: 14px;
    font-weight: 900;
    padding-bottom: 4px;
  }
  
  > h3 {
    display: flex;
    font-weight: 400;
    font-size: 12px;
    align-items: center;
  }
`