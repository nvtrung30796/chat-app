import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "config/firebase";
import styled from "styled-components";
import Header from "../../shared/containers/Header";
import Sidebar from "../../shared/containers/Sidebar";
import ChannelPage from "pages/channels/ChannelPage";
import {useSelector} from "react-redux";
import { selectedChannelId } from "redux/channel/channel";


function HomePage() {
  const [user] = useAuthState(auth);
  console.log(user);
  const channelActiveId = useSelector(selectedChannelId)

  return (
    <React.Fragment>
      <Header />
      <AppBody>
        <Sidebar />
        {channelActiveId && <ChannelPage channelId={channelActiveId}/>}
        
      </AppBody>
    </React.Fragment>
  );
}

export default HomePage;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
