import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectProfile } from "../../redux/profile/profile.selectors";

import {
  ProfileHeader,
  DetailsContainer,
  NameContainer,
  TitlesContainer,
} from "./profile.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

// const profileImage = require("../../assets/profile.png");

const Profile = ({ profile, hiddenOrVisible }) => {
  console.log(profile);
  return (
    <ProfileHeader hiddenOrVisible={hiddenOrVisible}>
      <DetailsContainer hiddenOrVisible={hiddenOrVisible}>
        <TitlesContainer>
          <NameContainer>{profile.fullName}</NameContainer>
          <span className="position">{profile.title}</span>
          <span className="email">{profile.email}</span>
          <span className="phone">{profile.phone}</span>
        </TitlesContainer>
      </DetailsContainer>
    </ProfileHeader>
  );
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
  hiddenOrVisible: selectHiddenOrVisible,
});
export default connect(mapStateToProps)(Profile);
