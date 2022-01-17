import React from 'react';
import { SocialIcon } from 'react-social-icons';

class TeamMembers extends React.Component {
    render() {
        return (
            <div class="container mt-5">
                <div className="row justify-content-center">
                    {this.props.members.map((member) =>
                        <div className="col-lg-4  d-flex align-items-stretch">
                            <div className="card mb-4 shadow-sm">
                                <img src={member.imageURL} className="card-img-top" alt="Sample Movie" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p className="card-text">{member.role}</p>
                                    <p className="card-text">{member.title}</p>
                                    <p className="card-text">{member.overview}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-auto">
                                        <SocialIcon network="twitter" url={member.twitterURL} target="_blank" rel="noopener noreferrer" />
                                        <SocialIcon network="linkedin" url={member.linkedinURL} target="_blank" rel="noopener noreferrer"/>
                                        <SocialIcon network="github" url={member.gitHubURL} target="_blank" rel="noopener noreferrer"/>
                                        <SocialIcon label="Our portfolio" url={member.personalBlogURL} target="_blank" rel="noopener noreferrer" />
                                        <SocialIcon network="medium" url={member.mediumURL} target="_blank" rel="noopener noreferrer"/>
                                        <SocialIcon network="instagram" url={member.instagramURL} target="_blank" rel="noopener noreferrer"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}


export default TeamMembers;


