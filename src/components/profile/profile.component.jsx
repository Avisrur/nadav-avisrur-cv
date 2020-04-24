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

const profileImage = require("../../assets/profile.png");

const Header = ({ profile }) => {
  console.log(profile);
  return (
    <ProfileHeader>
      <DetailsContainer>
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
});
export default connect(mapStateToProps)(Header);
