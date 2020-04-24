import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SocialMediaIconsReact } from "social-media-icons-react";

import { selectProfile } from "../../redux/profile/profile.selectors";

import {
  ProfileHeader,
  DetailsContainer,
  NameContainer,
  TitlesContainer,
} from "./profile.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

const profileImage = require("../../assets/profile.png");

const Profile = ({ profile, hiddenOrVisible }) => {
  console.log(profile);
  return (
    <ProfileHeader hiddenOrVisible={hiddenOrVisible}>
      <DetailsContainer hiddenOrVisible={hiddenOrVisible}>
        <img src={profileImage} alt="Nadav" />
        <TitlesContainer>
          <NameContainer>{profile.fullName}</NameContainer>
          <span className="position">{profile.title}</span>
          <span className="email">{profile.email}</span>
          <span className="phone">{profile.phone}</span>
          <div className="social">
            {profile.social.map((cur) => (
              <SocialMediaIconsReact key={cur.id} icon={cur.icon} />
            ))}
          </div>
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
